# `beyondcorpApplicationIamBinding` Submodule <a name="`beyondcorpApplicationIamBinding` Submodule" id="@cdktf/provider-google.beyondcorpApplicationIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpApplicationIamBinding <a name="BeyondcorpApplicationIamBinding" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding google_beyondcorp_application_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpApplicationIamBinding(Construct Scope, string Id, BeyondcorpApplicationIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig">BeyondcorpApplicationIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig">BeyondcorpApplicationIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.putCondition"></a>

```csharp
private void PutCondition(BeyondcorpApplicationIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BeyondcorpApplicationIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BeyondcorpApplicationIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BeyondcorpApplicationIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BeyondcorpApplicationIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BeyondcorpApplicationIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BeyondcorpApplicationIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BeyondcorpApplicationIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BeyondcorpApplicationIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BeyondcorpApplicationIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference">BeyondcorpApplicationIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.securityGatewaysIdInput">SecurityGatewaysIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.securityGatewaysId">SecurityGatewaysId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.condition"></a>

```csharp
public BeyondcorpApplicationIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference">BeyondcorpApplicationIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.conditionInput"></a>

```csharp
public BeyondcorpApplicationIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SecurityGatewaysIdInput`<sup>Optional</sup> <a name="SecurityGatewaysIdInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.securityGatewaysIdInput"></a>

```csharp
public string SecurityGatewaysIdInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SecurityGatewaysId`<sup>Required</sup> <a name="SecurityGatewaysId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.securityGatewaysId"></a>

```csharp
public string SecurityGatewaysId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpApplicationIamBindingCondition <a name="BeyondcorpApplicationIamBindingCondition" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpApplicationIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#expression BeyondcorpApplicationIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#title BeyondcorpApplicationIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#description BeyondcorpApplicationIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#expression BeyondcorpApplicationIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#title BeyondcorpApplicationIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#description BeyondcorpApplicationIamBinding#description}.

---

### BeyondcorpApplicationIamBindingConfig <a name="BeyondcorpApplicationIamBindingConfig" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpApplicationIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationId,
    string[] Members,
    string Role,
    string SecurityGatewaysId,
    BeyondcorpApplicationIamBindingCondition Condition = null,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#application_id BeyondcorpApplicationIamBinding#application_id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#members BeyondcorpApplicationIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#role BeyondcorpApplicationIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.securityGatewaysId">SecurityGatewaysId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#security_gateways_id BeyondcorpApplicationIamBinding#security_gateways_id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#id BeyondcorpApplicationIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#project BeyondcorpApplicationIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#application_id BeyondcorpApplicationIamBinding#application_id}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#members BeyondcorpApplicationIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#role BeyondcorpApplicationIamBinding#role}.

---

##### `SecurityGatewaysId`<sup>Required</sup> <a name="SecurityGatewaysId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.securityGatewaysId"></a>

```csharp
public string SecurityGatewaysId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#security_gateways_id BeyondcorpApplicationIamBinding#security_gateways_id}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.condition"></a>

```csharp
public BeyondcorpApplicationIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#condition BeyondcorpApplicationIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#id BeyondcorpApplicationIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application_iam_binding#project BeyondcorpApplicationIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpApplicationIamBindingConditionOutputReference <a name="BeyondcorpApplicationIamBindingConditionOutputReference" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BeyondcorpApplicationIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public BeyondcorpApplicationIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a>

---



