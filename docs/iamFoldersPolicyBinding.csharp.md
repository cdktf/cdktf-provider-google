# `iamFoldersPolicyBinding` Submodule <a name="`iamFoldersPolicyBinding` Submodule" id="@cdktf/provider-google.iamFoldersPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamFoldersPolicyBinding <a name="IamFoldersPolicyBinding" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding google_iam_folders_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamFoldersPolicyBinding(Construct Scope, string Id, IamFoldersPolicyBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig">IamFoldersPolicyBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig">IamFoldersPolicyBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetPolicyKind">ResetPolicyKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putCondition"></a>

```csharp
private void PutCondition(IamFoldersPolicyBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTarget"></a>

```csharp
private void PutTarget(IamFoldersPolicyBindingTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(IamFoldersPolicyBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts">IamFoldersPolicyBindingTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicyKind` <a name="ResetPolicyKind" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetPolicyKind"></a>

```csharp
private void ResetPolicyKind()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IamFoldersPolicyBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamFoldersPolicyBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamFoldersPolicyBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamFoldersPolicyBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamFoldersPolicyBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IamFoldersPolicyBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamFoldersPolicyBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamFoldersPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IamFoldersPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference">IamFoldersPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyUid">PolicyUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference">IamFoldersPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference">IamFoldersPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyBindingIdInput">PolicyBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyKindInput">PolicyKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyBindingId">PolicyBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyKind">PolicyKind</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.condition"></a>

```csharp
public IamFoldersPolicyBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference">IamFoldersPolicyBindingConditionOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyUid`<sup>Required</sup> <a name="PolicyUid" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyUid"></a>

```csharp
public string PolicyUid { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.target"></a>

```csharp
public IamFoldersPolicyBindingTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference">IamFoldersPolicyBindingTargetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.timeouts"></a>

```csharp
public IamFoldersPolicyBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference">IamFoldersPolicyBindingTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.conditionInput"></a>

```csharp
public IamFoldersPolicyBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PolicyBindingIdInput`<sup>Optional</sup> <a name="PolicyBindingIdInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyBindingIdInput"></a>

```csharp
public string PolicyBindingIdInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `PolicyKindInput`<sup>Optional</sup> <a name="PolicyKindInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyKindInput"></a>

```csharp
public string PolicyKindInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.targetInput"></a>

```csharp
public IamFoldersPolicyBindingTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `PolicyBindingId`<sup>Required</sup> <a name="PolicyBindingId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyBindingId"></a>

```csharp
public string PolicyBindingId { get; }
```

- *Type:* string

---

##### `PolicyKind`<sup>Required</sup> <a name="PolicyKind" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.policyKind"></a>

```csharp
public string PolicyKind { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamFoldersPolicyBindingCondition <a name="IamFoldersPolicyBindingCondition" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamFoldersPolicyBindingCondition {
    string Description = null,
    string Expression = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.description">Description</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.location">Location</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.title">Title</a></code> | <code>string</code> | Optional. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#description IamFoldersPolicyBinding#description}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#expression IamFoldersPolicyBinding#expression}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#location IamFoldersPolicyBinding#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#title IamFoldersPolicyBinding#title}

---

### IamFoldersPolicyBindingConfig <a name="IamFoldersPolicyBindingConfig" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamFoldersPolicyBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Folder,
    string Location,
    string Policy,
    string PolicyBindingId,
    IamFoldersPolicyBindingTarget Target,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    IamFoldersPolicyBindingCondition Condition = null,
    string DisplayName = null,
    string Id = null,
    string PolicyKind = null,
    IamFoldersPolicyBindingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.folder">Folder</a></code> | <code>string</code> | The parent folder for the PolicyBinding. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.location">Location</a></code> | <code>string</code> | The location of the PolicyBinding. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policy">Policy</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policyBindingId">PolicyBindingId</a></code> | <code>string</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.target">Target</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#id IamFoldersPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policyKind">PolicyKind</a></code> | <code>string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts">IamFoldersPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The parent folder for the PolicyBinding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#folder IamFoldersPolicyBinding#folder}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the PolicyBinding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#location IamFoldersPolicyBinding#location}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#policy IamFoldersPolicyBinding#policy}

---

##### `PolicyBindingId`<sup>Required</sup> <a name="PolicyBindingId" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policyBindingId"></a>

```csharp
public string PolicyBindingId { get; set; }
```

- *Type:* string

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#policy_binding_id IamFoldersPolicyBinding#policy_binding_id}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.target"></a>

```csharp
public IamFoldersPolicyBindingTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#target IamFoldersPolicyBinding#target}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#annotations IamFoldersPolicyBinding#annotations}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.condition"></a>

```csharp
public IamFoldersPolicyBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#condition IamFoldersPolicyBinding#condition}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#display_name IamFoldersPolicyBinding#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#id IamFoldersPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyKind`<sup>Optional</sup> <a name="PolicyKind" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.policyKind"></a>

```csharp
public string PolicyKind { get; set; }
```

- *Type:* string

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#policy_kind IamFoldersPolicyBinding#policy_kind}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConfig.property.timeouts"></a>

```csharp
public IamFoldersPolicyBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts">IamFoldersPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#timeouts IamFoldersPolicyBinding#timeouts}

---

### IamFoldersPolicyBindingTarget <a name="IamFoldersPolicyBindingTarget" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamFoldersPolicyBindingTarget {
    string PrincipalSet = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget.property.principalSet">PrincipalSet</a></code> | <code>string</code> | Required. |

---

##### `PrincipalSet`<sup>Optional</sup> <a name="PrincipalSet" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget.property.principalSet"></a>

```csharp
public string PrincipalSet { get; set; }
```

- *Type:* string

Required.

Immutable. Full Resource Name of the principal set used for principal access boundary policy bindings.
Examples for each one of the following supported principal set types:

* Folder: '//cloudresourcemanager.googleapis.com/folders/FOLDER_ID'
  It must be parent by the policy binding's parent (the folder).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#principal_set IamFoldersPolicyBinding#principal_set}

---

### IamFoldersPolicyBindingTimeouts <a name="IamFoldersPolicyBindingTimeouts" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamFoldersPolicyBindingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#create IamFoldersPolicyBinding#create}. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#delete IamFoldersPolicyBinding#delete}. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#update IamFoldersPolicyBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#create IamFoldersPolicyBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#delete IamFoldersPolicyBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/iam_folders_policy_binding#update IamFoldersPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamFoldersPolicyBindingConditionOutputReference <a name="IamFoldersPolicyBindingConditionOutputReference" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamFoldersPolicyBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingConditionOutputReference.property.internalValue"></a>

```csharp
public IamFoldersPolicyBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingCondition">IamFoldersPolicyBindingCondition</a>

---


### IamFoldersPolicyBindingTargetOutputReference <a name="IamFoldersPolicyBindingTargetOutputReference" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamFoldersPolicyBindingTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.resetPrincipalSet">ResetPrincipalSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrincipalSet` <a name="ResetPrincipalSet" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```csharp
private void ResetPrincipalSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.principalSetInput">PrincipalSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.principalSet">PrincipalSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalSetInput`<sup>Optional</sup> <a name="PrincipalSetInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```csharp
public string PrincipalSetInput { get; }
```

- *Type:* string

---

##### `PrincipalSet`<sup>Required</sup> <a name="PrincipalSet" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.principalSet"></a>

```csharp
public string PrincipalSet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTargetOutputReference.property.internalValue"></a>

```csharp
public IamFoldersPolicyBindingTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTarget">IamFoldersPolicyBindingTarget</a>

---


### IamFoldersPolicyBindingTimeoutsOutputReference <a name="IamFoldersPolicyBindingTimeoutsOutputReference" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamFoldersPolicyBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamFoldersPolicyBinding.IamFoldersPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



