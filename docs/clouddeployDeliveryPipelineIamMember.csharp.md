# `clouddeployDeliveryPipelineIamMember` Submodule <a name="`clouddeployDeliveryPipelineIamMember` Submodule" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployDeliveryPipelineIamMember <a name="ClouddeployDeliveryPipelineIamMember" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member google_clouddeploy_delivery_pipeline_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ClouddeployDeliveryPipelineIamMember(Construct Scope, string Id, ClouddeployDeliveryPipelineIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig">ClouddeployDeliveryPipelineIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig">ClouddeployDeliveryPipelineIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.putCondition"></a>

```csharp
private void PutCondition(ClouddeployDeliveryPipelineIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition">ClouddeployDeliveryPipelineIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ClouddeployDeliveryPipelineIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ClouddeployDeliveryPipelineIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ClouddeployDeliveryPipelineIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ClouddeployDeliveryPipelineIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ClouddeployDeliveryPipelineIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ClouddeployDeliveryPipelineIamMember resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClouddeployDeliveryPipelineIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ClouddeployDeliveryPipelineIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ClouddeployDeliveryPipelineIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference">ClouddeployDeliveryPipelineIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition">ClouddeployDeliveryPipelineIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.condition"></a>

```csharp
public ClouddeployDeliveryPipelineIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference">ClouddeployDeliveryPipelineIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.conditionInput"></a>

```csharp
public ClouddeployDeliveryPipelineIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition">ClouddeployDeliveryPipelineIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployDeliveryPipelineIamMemberCondition <a name="ClouddeployDeliveryPipelineIamMemberCondition" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ClouddeployDeliveryPipelineIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#expression ClouddeployDeliveryPipelineIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#title ClouddeployDeliveryPipelineIamMember#title}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#description ClouddeployDeliveryPipelineIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#expression ClouddeployDeliveryPipelineIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#title ClouddeployDeliveryPipelineIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#description ClouddeployDeliveryPipelineIamMember#description}.

---

### ClouddeployDeliveryPipelineIamMemberConfig <a name="ClouddeployDeliveryPipelineIamMemberConfig" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ClouddeployDeliveryPipelineIamMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Member,
    string Name,
    string Role,
    ClouddeployDeliveryPipelineIamMemberCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#member ClouddeployDeliveryPipelineIamMember#member}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#name ClouddeployDeliveryPipelineIamMember#name}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#role ClouddeployDeliveryPipelineIamMember#role}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition">ClouddeployDeliveryPipelineIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#id ClouddeployDeliveryPipelineIamMember#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#location ClouddeployDeliveryPipelineIamMember#location}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#project ClouddeployDeliveryPipelineIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#member ClouddeployDeliveryPipelineIamMember#member}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#name ClouddeployDeliveryPipelineIamMember#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#role ClouddeployDeliveryPipelineIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.condition"></a>

```csharp
public ClouddeployDeliveryPipelineIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition">ClouddeployDeliveryPipelineIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#condition ClouddeployDeliveryPipelineIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#id ClouddeployDeliveryPipelineIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#location ClouddeployDeliveryPipelineIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#project ClouddeployDeliveryPipelineIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployDeliveryPipelineIamMemberConditionOutputReference <a name="ClouddeployDeliveryPipelineIamMemberConditionOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ClouddeployDeliveryPipelineIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition">ClouddeployDeliveryPipelineIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public ClouddeployDeliveryPipelineIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition">ClouddeployDeliveryPipelineIamMemberCondition</a>

---



