# `iamWorkforcePoolIamPolicy` Submodule <a name="`iamWorkforcePoolIamPolicy` Submodule" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkforcePoolIamPolicy <a name="IamWorkforcePoolIamPolicy" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_iam_policy google_iam_workforce_pool_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolIamPolicy(Construct Scope, string Id, IamWorkforcePoolIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig">IamWorkforcePoolIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig">IamWorkforcePoolIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IamWorkforcePoolIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkforcePoolIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkforcePoolIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkforcePoolIamPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkforcePoolIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IamWorkforcePoolIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamWorkforcePoolIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamWorkforcePoolIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IamWorkforcePoolIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.workforcePoolIdInput">WorkforcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.workforcePoolId">WorkforcePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.policyDataInput"></a>

```csharp
public string PolicyDataInput { get; }
```

- *Type:* string

---

##### `WorkforcePoolIdInput`<sup>Optional</sup> <a name="WorkforcePoolIdInput" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.workforcePoolIdInput"></a>

```csharp
public string WorkforcePoolIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.workforcePoolId"></a>

```csharp
public string WorkforcePoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkforcePoolIamPolicyConfig <a name="IamWorkforcePoolIamPolicyConfig" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PolicyData,
    string WorkforcePoolId,
    string Id = null,
    string Location = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_iam_policy#policy_data IamWorkforcePoolIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.workforcePoolId">WorkforcePoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_iam_policy#workforce_pool_id IamWorkforcePoolIamPolicy#workforce_pool_id}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_iam_policy#id IamWorkforcePoolIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_iam_policy#location IamWorkforcePoolIamPolicy#location}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.policyData"></a>

```csharp
public string PolicyData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_iam_policy#policy_data IamWorkforcePoolIamPolicy#policy_data}.

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.workforcePoolId"></a>

```csharp
public string WorkforcePoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_iam_policy#workforce_pool_id IamWorkforcePoolIamPolicy#workforce_pool_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_iam_policy#id IamWorkforcePoolIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.iamWorkforcePoolIamPolicy.IamWorkforcePoolIamPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/iam_workforce_pool_iam_policy#location IamWorkforcePoolIamPolicy#location}.

---



