# `computeServiceAttachment` Submodule <a name="`computeServiceAttachment` Submodule" id="@cdktf/provider-google.computeServiceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeServiceAttachment <a name="ComputeServiceAttachment" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment google_compute_service_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeServiceAttachment(Construct Scope, string Id, ComputeServiceAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig">ComputeServiceAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig">ComputeServiceAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putConsumerAcceptLists">PutConsumerAcceptLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerAcceptLists">ResetConsumerAcceptLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerRejectLists">ResetConsumerRejectLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDomainNames">ResetDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetReconcileConnections">ResetReconcileConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConsumerAcceptLists` <a name="PutConsumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putConsumerAcceptLists"></a>

```csharp
private void PutConsumerAcceptLists(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putConsumerAcceptLists.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeServiceAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>

---

##### `ResetConsumerAcceptLists` <a name="ResetConsumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerAcceptLists"></a>

```csharp
private void ResetConsumerAcceptLists()
```

##### `ResetConsumerRejectLists` <a name="ResetConsumerRejectLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetConsumerRejectLists"></a>

```csharp
private void ResetConsumerRejectLists()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDomainNames` <a name="ResetDomainNames" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetDomainNames"></a>

```csharp
private void ResetDomainNames()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReconcileConnections` <a name="ResetReconcileConnections" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetReconcileConnections"></a>

```csharp
private void ResetReconcileConnections()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeServiceAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeServiceAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeServiceAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeServiceAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeServiceAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeServiceAttachment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeServiceAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeServiceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeServiceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectedEndpoints">ConnectedEndpoints</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList">ComputeServiceAttachmentConnectedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptLists">ConsumerAcceptLists</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList">ComputeServiceAttachmentConsumerAcceptListsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference">ComputeServiceAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreferenceInput">ConnectionPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptListsInput">ConsumerAcceptListsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectListsInput">ConsumerRejectListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNamesInput">DomainNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocolInput">EnableProxyProtocolInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnetsInput">NatSubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.reconcileConnectionsInput">ReconcileConnectionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetServiceInput">TargetServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreference">ConnectionPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectLists">ConsumerRejectLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNames">DomainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnets">NatSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.reconcileConnections">ReconcileConnections</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetService">TargetService</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConnectedEndpoints`<sup>Required</sup> <a name="ConnectedEndpoints" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectedEndpoints"></a>

```csharp
public ComputeServiceAttachmentConnectedEndpointsList ConnectedEndpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList">ComputeServiceAttachmentConnectedEndpointsList</a>

---

##### `ConsumerAcceptLists`<sup>Required</sup> <a name="ConsumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptLists"></a>

```csharp
public ComputeServiceAttachmentConsumerAcceptListsList ConsumerAcceptLists { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList">ComputeServiceAttachmentConsumerAcceptListsList</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeouts"></a>

```csharp
public ComputeServiceAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference">ComputeServiceAttachmentTimeoutsOutputReference</a>

---

##### `ConnectionPreferenceInput`<sup>Optional</sup> <a name="ConnectionPreferenceInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreferenceInput"></a>

```csharp
public string ConnectionPreferenceInput { get; }
```

- *Type:* string

---

##### `ConsumerAcceptListsInput`<sup>Optional</sup> <a name="ConsumerAcceptListsInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerAcceptListsInput"></a>

```csharp
public object ConsumerAcceptListsInput { get; }
```

- *Type:* object

---

##### `ConsumerRejectListsInput`<sup>Optional</sup> <a name="ConsumerRejectListsInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectListsInput"></a>

```csharp
public string[] ConsumerRejectListsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainNamesInput`<sup>Optional</sup> <a name="DomainNamesInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNamesInput"></a>

```csharp
public string[] DomainNamesInput { get; }
```

- *Type:* string[]

---

##### `EnableProxyProtocolInput`<sup>Optional</sup> <a name="EnableProxyProtocolInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocolInput"></a>

```csharp
public object EnableProxyProtocolInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NatSubnetsInput`<sup>Optional</sup> <a name="NatSubnetsInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnetsInput"></a>

```csharp
public string[] NatSubnetsInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReconcileConnectionsInput`<sup>Optional</sup> <a name="ReconcileConnectionsInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.reconcileConnectionsInput"></a>

```csharp
public object ReconcileConnectionsInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TargetServiceInput`<sup>Optional</sup> <a name="TargetServiceInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetServiceInput"></a>

```csharp
public string TargetServiceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ConnectionPreference`<sup>Required</sup> <a name="ConnectionPreference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.connectionPreference"></a>

```csharp
public string ConnectionPreference { get; }
```

- *Type:* string

---

##### `ConsumerRejectLists`<sup>Required</sup> <a name="ConsumerRejectLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.consumerRejectLists"></a>

```csharp
public string[] ConsumerRejectLists { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.domainNames"></a>

```csharp
public string[] DomainNames { get; }
```

- *Type:* string[]

---

##### `EnableProxyProtocol`<sup>Required</sup> <a name="EnableProxyProtocol" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.enableProxyProtocol"></a>

```csharp
public object EnableProxyProtocol { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NatSubnets`<sup>Required</sup> <a name="NatSubnets" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.natSubnets"></a>

```csharp
public string[] NatSubnets { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReconcileConnections`<sup>Required</sup> <a name="ReconcileConnections" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.reconcileConnections"></a>

```csharp
public object ReconcileConnections { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TargetService`<sup>Required</sup> <a name="TargetService" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.targetService"></a>

```csharp
public string TargetService { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeServiceAttachmentConfig <a name="ComputeServiceAttachmentConfig" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeServiceAttachmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConnectionPreference,
    object EnableProxyProtocol,
    string Name,
    string[] NatSubnets,
    string TargetService,
    object ConsumerAcceptLists = null,
    string[] ConsumerRejectLists = null,
    string Description = null,
    string[] DomainNames = null,
    string Id = null,
    string Project = null,
    object ReconcileConnections = null,
    string Region = null,
    ComputeServiceAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connectionPreference">ConnectionPreference</a></code> | <code>string</code> | The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL". |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>object</code> | If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.natSubnets">NatSubnets</a></code> | <code>string[]</code> | An array of subnets that is provided for NAT in this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.targetService">TargetService</a></code> | <code>string</code> | The URL of a forwarding rule that represents the service identified by this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerAcceptLists">ConsumerAcceptLists</a></code> | <code>object</code> | consumer_accept_lists block. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerRejectLists">ConsumerRejectLists</a></code> | <code>string[]</code> | An array of projects that are not allowed to connect to this service attachment. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.domainNames">DomainNames</a></code> | <code>string[]</code> | If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#id ComputeServiceAttachment#id}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#project ComputeServiceAttachment#project}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.reconcileConnections">ReconcileConnections</a></code> | <code>object</code> | This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.region">Region</a></code> | <code>string</code> | URL of the region where the resource resides. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConnectionPreference`<sup>Required</sup> <a name="ConnectionPreference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.connectionPreference"></a>

```csharp
public string ConnectionPreference { get; set; }
```

- *Type:* string

The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#connection_preference ComputeServiceAttachment#connection_preference}

---

##### `EnableProxyProtocol`<sup>Required</sup> <a name="EnableProxyProtocol" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.enableProxyProtocol"></a>

```csharp
public object EnableProxyProtocol { get; set; }
```

- *Type:* object

If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse proxies on their way to destination servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#enable_proxy_protocol ComputeServiceAttachment#enable_proxy_protocol}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#name ComputeServiceAttachment#name}

---

##### `NatSubnets`<sup>Required</sup> <a name="NatSubnets" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.natSubnets"></a>

```csharp
public string[] NatSubnets { get; set; }
```

- *Type:* string[]

An array of subnets that is provided for NAT in this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#nat_subnets ComputeServiceAttachment#nat_subnets}

---

##### `TargetService`<sup>Required</sup> <a name="TargetService" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.targetService"></a>

```csharp
public string TargetService { get; set; }
```

- *Type:* string

The URL of a forwarding rule that represents the service identified by this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#target_service ComputeServiceAttachment#target_service}

---

##### `ConsumerAcceptLists`<sup>Optional</sup> <a name="ConsumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerAcceptLists"></a>

```csharp
public object ConsumerAcceptLists { get; set; }
```

- *Type:* object

consumer_accept_lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#consumer_accept_lists ComputeServiceAttachment#consumer_accept_lists}

---

##### `ConsumerRejectLists`<sup>Optional</sup> <a name="ConsumerRejectLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.consumerRejectLists"></a>

```csharp
public string[] ConsumerRejectLists { get; set; }
```

- *Type:* string[]

An array of projects that are not allowed to connect to this service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#consumer_reject_lists ComputeServiceAttachment#consumer_reject_lists}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#description ComputeServiceAttachment#description}

---

##### `DomainNames`<sup>Optional</sup> <a name="DomainNames" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.domainNames"></a>

```csharp
public string[] DomainNames { get; set; }
```

- *Type:* string[]

If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS.

For example, this is a
valid domain name: "p.mycompany.com.". Current max number of domain names
supported is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#domain_names ComputeServiceAttachment#domain_names}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#id ComputeServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#project ComputeServiceAttachment#project}.

---

##### `ReconcileConnections`<sup>Optional</sup> <a name="ReconcileConnections" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.reconcileConnections"></a>

```csharp
public object ReconcileConnections { get; set; }
```

- *Type:* object

This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or REJECTED PSC endpoints.

If false, connection policy update will only affect existing PENDING PSC endpoints. Existing ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified .
If true, update will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to REJECTED if its project is added to the reject list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#reconcile_connections ComputeServiceAttachment#reconcile_connections}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

URL of the region where the resource resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#region ComputeServiceAttachment#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConfig.property.timeouts"></a>

```csharp
public ComputeServiceAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts">ComputeServiceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#timeouts ComputeServiceAttachment#timeouts}

---

### ComputeServiceAttachmentConnectedEndpoints <a name="ComputeServiceAttachmentConnectedEndpoints" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeServiceAttachmentConnectedEndpoints {

};
```


### ComputeServiceAttachmentConsumerAcceptLists <a name="ComputeServiceAttachmentConsumerAcceptLists" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeServiceAttachmentConsumerAcceptLists {
    double ConnectionLimit,
    string NetworkUrl = null,
    string ProjectIdOrNum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.connectionLimit">ConnectionLimit</a></code> | <code>double</code> | The number of consumer forwarding rules the consumer project can create. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | The network that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.projectIdOrNum">ProjectIdOrNum</a></code> | <code>string</code> | A project that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set. |

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.connectionLimit"></a>

```csharp
public double ConnectionLimit { get; set; }
```

- *Type:* double

The number of consumer forwarding rules the consumer project can create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#connection_limit ComputeServiceAttachment#connection_limit}

---

##### `NetworkUrl`<sup>Optional</sup> <a name="NetworkUrl" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; set; }
```

- *Type:* string

The network that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#network_url ComputeServiceAttachment#network_url}

---

##### `ProjectIdOrNum`<sup>Optional</sup> <a name="ProjectIdOrNum" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptLists.property.projectIdOrNum"></a>

```csharp
public string ProjectIdOrNum { get; set; }
```

- *Type:* string

A project that is allowed to connect to this service attachment. Only one of project_id_or_num and network_url may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#project_id_or_num ComputeServiceAttachment#project_id_or_num}

---

### ComputeServiceAttachmentTimeouts <a name="ComputeServiceAttachmentTimeouts" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeServiceAttachmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#create ComputeServiceAttachment#create}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#delete ComputeServiceAttachment#delete}. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#update ComputeServiceAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#create ComputeServiceAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#delete ComputeServiceAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_service_attachment#update ComputeServiceAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeServiceAttachmentConnectedEndpointsList <a name="ComputeServiceAttachmentConnectedEndpointsList" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeServiceAttachmentConnectedEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.get"></a>

```csharp
private ComputeServiceAttachmentConnectedEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ComputeServiceAttachmentConnectedEndpointsOutputReference <a name="ComputeServiceAttachmentConnectedEndpointsOutputReference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeServiceAttachmentConnectedEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints">ComputeServiceAttachmentConnectedEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpointsOutputReference.property.internalValue"></a>

```csharp
public ComputeServiceAttachmentConnectedEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConnectedEndpoints">ComputeServiceAttachmentConnectedEndpoints</a>

---


### ComputeServiceAttachmentConsumerAcceptListsList <a name="ComputeServiceAttachmentConsumerAcceptListsList" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeServiceAttachmentConsumerAcceptListsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.get"></a>

```csharp
private ComputeServiceAttachmentConsumerAcceptListsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeServiceAttachmentConsumerAcceptListsOutputReference <a name="ComputeServiceAttachmentConsumerAcceptListsOutputReference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeServiceAttachmentConsumerAcceptListsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetNetworkUrl">ResetNetworkUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetProjectIdOrNum">ResetProjectIdOrNum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetworkUrl` <a name="ResetNetworkUrl" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetNetworkUrl"></a>

```csharp
private void ResetNetworkUrl()
```

##### `ResetProjectIdOrNum` <a name="ResetProjectIdOrNum" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.resetProjectIdOrNum"></a>

```csharp
private void ResetProjectIdOrNum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimitInput">ConnectionLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNumInput">ProjectIdOrNumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit">ConnectionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum">ProjectIdOrNum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionLimitInput`<sup>Optional</sup> <a name="ConnectionLimitInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimitInput"></a>

```csharp
public double ConnectionLimitInput { get; }
```

- *Type:* double

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrlInput"></a>

```csharp
public string NetworkUrlInput { get; }
```

- *Type:* string

---

##### `ProjectIdOrNumInput`<sup>Optional</sup> <a name="ProjectIdOrNumInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNumInput"></a>

```csharp
public string ProjectIdOrNumInput { get; }
```

- *Type:* string

---

##### `ConnectionLimit`<sup>Required</sup> <a name="ConnectionLimit" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.connectionLimit"></a>

```csharp
public double ConnectionLimit { get; }
```

- *Type:* double

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; }
```

- *Type:* string

---

##### `ProjectIdOrNum`<sup>Required</sup> <a name="ProjectIdOrNum" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.projectIdOrNum"></a>

```csharp
public string ProjectIdOrNum { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentConsumerAcceptListsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeServiceAttachmentTimeoutsOutputReference <a name="ComputeServiceAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeServiceAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeServiceAttachment.ComputeServiceAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



