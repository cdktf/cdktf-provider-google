# `cloudbuildv2ConnectionIamBinding` Submodule <a name="`cloudbuildv2ConnectionIamBinding` Submodule" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudbuildv2ConnectionIamBinding <a name="Cloudbuildv2ConnectionIamBinding" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding google_cloudbuildv2_connection_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new Cloudbuildv2ConnectionIamBinding(Construct Scope, string Id, Cloudbuildv2ConnectionIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig">Cloudbuildv2ConnectionIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig">Cloudbuildv2ConnectionIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.putCondition"></a>

```csharp
private void PutCondition(Cloudbuildv2ConnectionIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingCondition">Cloudbuildv2ConnectionIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Cloudbuildv2ConnectionIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

Cloudbuildv2ConnectionIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

Cloudbuildv2ConnectionIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

Cloudbuildv2ConnectionIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

Cloudbuildv2ConnectionIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Cloudbuildv2ConnectionIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Cloudbuildv2ConnectionIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Cloudbuildv2ConnectionIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Cloudbuildv2ConnectionIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference">Cloudbuildv2ConnectionIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingCondition">Cloudbuildv2ConnectionIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.condition"></a>

```csharp
public Cloudbuildv2ConnectionIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference">Cloudbuildv2ConnectionIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.conditionInput"></a>

```csharp
public Cloudbuildv2ConnectionIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingCondition">Cloudbuildv2ConnectionIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Cloudbuildv2ConnectionIamBindingCondition <a name="Cloudbuildv2ConnectionIamBindingCondition" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new Cloudbuildv2ConnectionIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#expression Cloudbuildv2ConnectionIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#title Cloudbuildv2ConnectionIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#description Cloudbuildv2ConnectionIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#expression Cloudbuildv2ConnectionIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#title Cloudbuildv2ConnectionIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#description Cloudbuildv2ConnectionIamBinding#description}.

---

### Cloudbuildv2ConnectionIamBindingConfig <a name="Cloudbuildv2ConnectionIamBindingConfig" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new Cloudbuildv2ConnectionIamBindingConfig {
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
    Cloudbuildv2ConnectionIamBindingCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#members Cloudbuildv2ConnectionIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#name Cloudbuildv2ConnectionIamBinding#name}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#role Cloudbuildv2ConnectionIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingCondition">Cloudbuildv2ConnectionIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#id Cloudbuildv2ConnectionIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#location Cloudbuildv2ConnectionIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#project Cloudbuildv2ConnectionIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#members Cloudbuildv2ConnectionIamBinding#members}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#name Cloudbuildv2ConnectionIamBinding#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#role Cloudbuildv2ConnectionIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.condition"></a>

```csharp
public Cloudbuildv2ConnectionIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingCondition">Cloudbuildv2ConnectionIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#condition Cloudbuildv2ConnectionIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#id Cloudbuildv2ConnectionIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#location Cloudbuildv2ConnectionIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/cloudbuildv2_connection_iam_binding#project Cloudbuildv2ConnectionIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### Cloudbuildv2ConnectionIamBindingConditionOutputReference <a name="Cloudbuildv2ConnectionIamBindingConditionOutputReference" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new Cloudbuildv2ConnectionIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingCondition">Cloudbuildv2ConnectionIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public Cloudbuildv2ConnectionIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamBinding.Cloudbuildv2ConnectionIamBindingCondition">Cloudbuildv2ConnectionIamBindingCondition</a>

---



