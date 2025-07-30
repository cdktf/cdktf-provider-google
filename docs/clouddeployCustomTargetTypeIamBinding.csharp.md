# `clouddeployCustomTargetTypeIamBinding` Submodule <a name="`clouddeployCustomTargetTypeIamBinding` Submodule" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployCustomTargetTypeIamBinding <a name="ClouddeployCustomTargetTypeIamBinding" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding google_clouddeploy_custom_target_type_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ClouddeployCustomTargetTypeIamBinding(Construct Scope, string Id, ClouddeployCustomTargetTypeIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig">ClouddeployCustomTargetTypeIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig">ClouddeployCustomTargetTypeIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.putCondition"></a>

```csharp
private void PutCondition(ClouddeployCustomTargetTypeIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition">ClouddeployCustomTargetTypeIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ClouddeployCustomTargetTypeIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ClouddeployCustomTargetTypeIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ClouddeployCustomTargetTypeIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ClouddeployCustomTargetTypeIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ClouddeployCustomTargetTypeIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ClouddeployCustomTargetTypeIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClouddeployCustomTargetTypeIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ClouddeployCustomTargetTypeIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ClouddeployCustomTargetTypeIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference">ClouddeployCustomTargetTypeIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition">ClouddeployCustomTargetTypeIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.condition"></a>

```csharp
public ClouddeployCustomTargetTypeIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference">ClouddeployCustomTargetTypeIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.conditionInput"></a>

```csharp
public ClouddeployCustomTargetTypeIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition">ClouddeployCustomTargetTypeIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployCustomTargetTypeIamBindingCondition <a name="ClouddeployCustomTargetTypeIamBindingCondition" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ClouddeployCustomTargetTypeIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#expression ClouddeployCustomTargetTypeIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#title ClouddeployCustomTargetTypeIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#description ClouddeployCustomTargetTypeIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#expression ClouddeployCustomTargetTypeIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#title ClouddeployCustomTargetTypeIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#description ClouddeployCustomTargetTypeIamBinding#description}.

---

### ClouddeployCustomTargetTypeIamBindingConfig <a name="ClouddeployCustomTargetTypeIamBindingConfig" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ClouddeployCustomTargetTypeIamBindingConfig {
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
    ClouddeployCustomTargetTypeIamBindingCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#members ClouddeployCustomTargetTypeIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#name ClouddeployCustomTargetTypeIamBinding#name}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#role ClouddeployCustomTargetTypeIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition">ClouddeployCustomTargetTypeIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#id ClouddeployCustomTargetTypeIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#location ClouddeployCustomTargetTypeIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#project ClouddeployCustomTargetTypeIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#members ClouddeployCustomTargetTypeIamBinding#members}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#name ClouddeployCustomTargetTypeIamBinding#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#role ClouddeployCustomTargetTypeIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.condition"></a>

```csharp
public ClouddeployCustomTargetTypeIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition">ClouddeployCustomTargetTypeIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#condition ClouddeployCustomTargetTypeIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#id ClouddeployCustomTargetTypeIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#location ClouddeployCustomTargetTypeIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/clouddeploy_custom_target_type_iam_binding#project ClouddeployCustomTargetTypeIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployCustomTargetTypeIamBindingConditionOutputReference <a name="ClouddeployCustomTargetTypeIamBindingConditionOutputReference" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ClouddeployCustomTargetTypeIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition">ClouddeployCustomTargetTypeIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public ClouddeployCustomTargetTypeIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition">ClouddeployCustomTargetTypeIamBindingCondition</a>

---



