# `cloudRunV2WorkerPoolIamBinding` Submodule <a name="`cloudRunV2WorkerPoolIamBinding` Submodule" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudRunV2WorkerPoolIamBinding <a name="CloudRunV2WorkerPoolIamBinding" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding google_cloud_run_v2_worker_pool_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolIamBinding(Construct Scope, string Id, CloudRunV2WorkerPoolIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig">CloudRunV2WorkerPoolIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig">CloudRunV2WorkerPoolIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.putCondition"></a>

```csharp
private void PutCondition(CloudRunV2WorkerPoolIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudRunV2WorkerPoolIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudRunV2WorkerPoolIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudRunV2WorkerPoolIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudRunV2WorkerPoolIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudRunV2WorkerPoolIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudRunV2WorkerPoolIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudRunV2WorkerPoolIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudRunV2WorkerPoolIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudRunV2WorkerPoolIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference">CloudRunV2WorkerPoolIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.condition"></a>

```csharp
public CloudRunV2WorkerPoolIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference">CloudRunV2WorkerPoolIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.conditionInput"></a>

```csharp
public CloudRunV2WorkerPoolIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudRunV2WorkerPoolIamBindingCondition <a name="CloudRunV2WorkerPoolIamBindingCondition" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#expression CloudRunV2WorkerPoolIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#title CloudRunV2WorkerPoolIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#description CloudRunV2WorkerPoolIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#expression CloudRunV2WorkerPoolIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#title CloudRunV2WorkerPoolIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#description CloudRunV2WorkerPoolIamBinding#description}.

---

### CloudRunV2WorkerPoolIamBindingConfig <a name="CloudRunV2WorkerPoolIamBindingConfig" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolIamBindingConfig {
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
    CloudRunV2WorkerPoolIamBindingCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#members CloudRunV2WorkerPoolIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#name CloudRunV2WorkerPoolIamBinding#name}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#role CloudRunV2WorkerPoolIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#id CloudRunV2WorkerPoolIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#location CloudRunV2WorkerPoolIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#project CloudRunV2WorkerPoolIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#members CloudRunV2WorkerPoolIamBinding#members}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#name CloudRunV2WorkerPoolIamBinding#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#role CloudRunV2WorkerPoolIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.condition"></a>

```csharp
public CloudRunV2WorkerPoolIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#condition CloudRunV2WorkerPoolIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#id CloudRunV2WorkerPoolIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#location CloudRunV2WorkerPoolIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/cloud_run_v2_worker_pool_iam_binding#project CloudRunV2WorkerPoolIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudRunV2WorkerPoolIamBindingConditionOutputReference <a name="CloudRunV2WorkerPoolIamBindingConditionOutputReference" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudRunV2WorkerPoolIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public CloudRunV2WorkerPoolIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2WorkerPoolIamBinding.CloudRunV2WorkerPoolIamBindingCondition">CloudRunV2WorkerPoolIamBindingCondition</a>

---



