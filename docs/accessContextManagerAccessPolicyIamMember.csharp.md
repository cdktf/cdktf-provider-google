# `accessContextManagerAccessPolicyIamMember` Submodule <a name="`accessContextManagerAccessPolicyIamMember` Submodule" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerAccessPolicyIamMember <a name="AccessContextManagerAccessPolicyIamMember" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member google_access_context_manager_access_policy_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessPolicyIamMember(Construct Scope, string Id, AccessContextManagerAccessPolicyIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig">AccessContextManagerAccessPolicyIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig">AccessContextManagerAccessPolicyIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.putCondition"></a>

```csharp
private void PutCondition(AccessContextManagerAccessPolicyIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition">AccessContextManagerAccessPolicyIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccessContextManagerAccessPolicyIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerAccessPolicyIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerAccessPolicyIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerAccessPolicyIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerAccessPolicyIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AccessContextManagerAccessPolicyIamMember resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessContextManagerAccessPolicyIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessContextManagerAccessPolicyIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AccessContextManagerAccessPolicyIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference">AccessContextManagerAccessPolicyIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition">AccessContextManagerAccessPolicyIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.condition"></a>

```csharp
public AccessContextManagerAccessPolicyIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference">AccessContextManagerAccessPolicyIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.conditionInput"></a>

```csharp
public AccessContextManagerAccessPolicyIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition">AccessContextManagerAccessPolicyIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerAccessPolicyIamMemberCondition <a name="AccessContextManagerAccessPolicyIamMemberCondition" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessPolicyIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member#expression AccessContextManagerAccessPolicyIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member#title AccessContextManagerAccessPolicyIamMember#title}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member#description AccessContextManagerAccessPolicyIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member#expression AccessContextManagerAccessPolicyIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member#title AccessContextManagerAccessPolicyIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member#description AccessContextManagerAccessPolicyIamMember#description}.

---

### AccessContextManagerAccessPolicyIamMemberConfig <a name="AccessContextManagerAccessPolicyIamMemberConfig" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessPolicyIamMemberConfig {
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
    AccessContextManagerAccessPolicyIamMemberCondition Condition = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member#member AccessContextManagerAccessPolicyIamMember#member}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member#name AccessContextManagerAccessPolicyIamMember#name}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member#role AccessContextManagerAccessPolicyIamMember#role}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition">AccessContextManagerAccessPolicyIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member#id AccessContextManagerAccessPolicyIamMember#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member#member AccessContextManagerAccessPolicyIamMember#member}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member#name AccessContextManagerAccessPolicyIamMember#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member#role AccessContextManagerAccessPolicyIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.condition"></a>

```csharp
public AccessContextManagerAccessPolicyIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition">AccessContextManagerAccessPolicyIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member#condition AccessContextManagerAccessPolicyIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/access_context_manager_access_policy_iam_member#id AccessContextManagerAccessPolicyIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerAccessPolicyIamMemberConditionOutputReference <a name="AccessContextManagerAccessPolicyIamMemberConditionOutputReference" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessPolicyIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition">AccessContextManagerAccessPolicyIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public AccessContextManagerAccessPolicyIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition">AccessContextManagerAccessPolicyIamMemberCondition</a>

---



