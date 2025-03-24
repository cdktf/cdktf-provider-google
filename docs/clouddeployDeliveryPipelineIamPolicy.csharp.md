# `clouddeployDeliveryPipelineIamPolicy` Submodule <a name="`clouddeployDeliveryPipelineIamPolicy` Submodule" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployDeliveryPipelineIamPolicy <a name="ClouddeployDeliveryPipelineIamPolicy" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_policy google_clouddeploy_delivery_pipeline_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ClouddeployDeliveryPipelineIamPolicy(Construct Scope, string Id, ClouddeployDeliveryPipelineIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig">ClouddeployDeliveryPipelineIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig">ClouddeployDeliveryPipelineIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ClouddeployDeliveryPipelineIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ClouddeployDeliveryPipelineIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ClouddeployDeliveryPipelineIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ClouddeployDeliveryPipelineIamPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ClouddeployDeliveryPipelineIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ClouddeployDeliveryPipelineIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClouddeployDeliveryPipelineIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ClouddeployDeliveryPipelineIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ClouddeployDeliveryPipelineIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.policyDataInput"></a>

```csharp
public string PolicyDataInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployDeliveryPipelineIamPolicyConfig <a name="ClouddeployDeliveryPipelineIamPolicyConfig" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ClouddeployDeliveryPipelineIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string PolicyData,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_policy#name ClouddeployDeliveryPipelineIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_policy#policy_data ClouddeployDeliveryPipelineIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_policy#id ClouddeployDeliveryPipelineIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_policy#location ClouddeployDeliveryPipelineIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_policy#project ClouddeployDeliveryPipelineIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_policy#name ClouddeployDeliveryPipelineIamPolicy#name}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.policyData"></a>

```csharp
public string PolicyData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_policy#policy_data ClouddeployDeliveryPipelineIamPolicy#policy_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_policy#id ClouddeployDeliveryPipelineIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_policy#location ClouddeployDeliveryPipelineIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamPolicy.ClouddeployDeliveryPipelineIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddeploy_delivery_pipeline_iam_policy#project ClouddeployDeliveryPipelineIamPolicy#project}.

---



