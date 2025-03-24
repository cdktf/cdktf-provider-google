# `clouddeployDeliveryPipelineIamBinding` Submodule <a name="`clouddeployDeliveryPipelineIamBinding` Submodule" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployDeliveryPipelineIamBinding <a name="ClouddeployDeliveryPipelineIamBinding" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding google_clouddeploy_delivery_pipeline_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ClouddeployDeliveryPipelineIamBinding(Construct Scope, string Id, ClouddeployDeliveryPipelineIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig">ClouddeployDeliveryPipelineIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig">ClouddeployDeliveryPipelineIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.putCondition"></a>

```csharp
private void PutCondition(ClouddeployDeliveryPipelineIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingCondition">ClouddeployDeliveryPipelineIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ClouddeployDeliveryPipelineIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ClouddeployDeliveryPipelineIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ClouddeployDeliveryPipelineIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ClouddeployDeliveryPipelineIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ClouddeployDeliveryPipelineIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ClouddeployDeliveryPipelineIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClouddeployDeliveryPipelineIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ClouddeployDeliveryPipelineIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ClouddeployDeliveryPipelineIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference">ClouddeployDeliveryPipelineIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingCondition">ClouddeployDeliveryPipelineIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.condition"></a>

```csharp
public ClouddeployDeliveryPipelineIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference">ClouddeployDeliveryPipelineIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.conditionInput"></a>

```csharp
public ClouddeployDeliveryPipelineIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingCondition">ClouddeployDeliveryPipelineIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployDeliveryPipelineIamBindingCondition <a name="ClouddeployDeliveryPipelineIamBindingCondition" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ClouddeployDeliveryPipelineIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#expression ClouddeployDeliveryPipelineIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#title ClouddeployDeliveryPipelineIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#description ClouddeployDeliveryPipelineIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#expression ClouddeployDeliveryPipelineIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#title ClouddeployDeliveryPipelineIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#description ClouddeployDeliveryPipelineIamBinding#description}.

---

### ClouddeployDeliveryPipelineIamBindingConfig <a name="ClouddeployDeliveryPipelineIamBindingConfig" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ClouddeployDeliveryPipelineIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Members,
    string Name,
    string Role,
    ClouddeployDeliveryPipelineIamBindingCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#members ClouddeployDeliveryPipelineIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#name ClouddeployDeliveryPipelineIamBinding#name}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#role ClouddeployDeliveryPipelineIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingCondition">ClouddeployDeliveryPipelineIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#id ClouddeployDeliveryPipelineIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#location ClouddeployDeliveryPipelineIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#project ClouddeployDeliveryPipelineIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#members ClouddeployDeliveryPipelineIamBinding#members}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#name ClouddeployDeliveryPipelineIamBinding#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#role ClouddeployDeliveryPipelineIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.condition"></a>

```csharp
public ClouddeployDeliveryPipelineIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingCondition">ClouddeployDeliveryPipelineIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#condition ClouddeployDeliveryPipelineIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#id ClouddeployDeliveryPipelineIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#location ClouddeployDeliveryPipelineIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_binding#project ClouddeployDeliveryPipelineIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployDeliveryPipelineIamBindingConditionOutputReference <a name="ClouddeployDeliveryPipelineIamBindingConditionOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ClouddeployDeliveryPipelineIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingCondition">ClouddeployDeliveryPipelineIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public ClouddeployDeliveryPipelineIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamBinding.ClouddeployDeliveryPipelineIamBindingCondition">ClouddeployDeliveryPipelineIamBindingCondition</a>

---



