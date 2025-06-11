# `iamPrincipalAccessBoundaryPolicy` Submodule <a name="`iamPrincipalAccessBoundaryPolicy` Submodule" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamPrincipalAccessBoundaryPolicy <a name="IamPrincipalAccessBoundaryPolicy" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy google_iam_principal_access_boundary_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamPrincipalAccessBoundaryPolicy(Construct Scope, string Id, IamPrincipalAccessBoundaryPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig">IamPrincipalAccessBoundaryPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig">IamPrincipalAccessBoundaryPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putDetails">PutDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetDetails">ResetDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetails` <a name="PutDetails" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putDetails"></a>

```csharp
private void PutDetails(IamPrincipalAccessBoundaryPolicyDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(IamPrincipalAccessBoundaryPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDetails` <a name="ResetDetails" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetDetails"></a>

```csharp
private void ResetDetails()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IamPrincipalAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamPrincipalAccessBoundaryPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamPrincipalAccessBoundaryPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamPrincipalAccessBoundaryPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamPrincipalAccessBoundaryPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IamPrincipalAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamPrincipalAccessBoundaryPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamPrincipalAccessBoundaryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IamPrincipalAccessBoundaryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.details">Details</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference">IamPrincipalAccessBoundaryPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference">IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.detailsInput">DetailsInput</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyIdInput">PrincipalAccessBoundaryPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyId">PrincipalAccessBoundaryPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.details"></a>

```csharp
public IamPrincipalAccessBoundaryPolicyDetailsOutputReference Details { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference">IamPrincipalAccessBoundaryPolicyDetailsOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.timeouts"></a>

```csharp
public IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference">IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.detailsInput"></a>

```csharp
public IamPrincipalAccessBoundaryPolicyDetails DetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PrincipalAccessBoundaryPolicyIdInput`<sup>Optional</sup> <a name="PrincipalAccessBoundaryPolicyIdInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyIdInput"></a>

```csharp
public string PrincipalAccessBoundaryPolicyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `PrincipalAccessBoundaryPolicyId`<sup>Required</sup> <a name="PrincipalAccessBoundaryPolicyId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyId"></a>

```csharp
public string PrincipalAccessBoundaryPolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamPrincipalAccessBoundaryPolicyConfig <a name="IamPrincipalAccessBoundaryPolicyConfig" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamPrincipalAccessBoundaryPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Organization,
    string PrincipalAccessBoundaryPolicyId,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    IamPrincipalAccessBoundaryPolicyDetails Details = null,
    string DisplayName = null,
    string Id = null,
    IamPrincipalAccessBoundaryPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.location">Location</a></code> | <code>string</code> | The location the principal access boundary policy is in. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.organization">Organization</a></code> | <code>string</code> | The parent organization of the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.principalAccessBoundaryPolicyId">PrincipalAccessBoundaryPolicyId</a></code> | <code>string</code> | The ID to use to create the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.details">Details</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The description of the principal access boundary policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#id IamPrincipalAccessBoundaryPolicy#id}. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location the principal access boundary policy is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#location IamPrincipalAccessBoundaryPolicy#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The parent organization of the principal access boundary policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#organization IamPrincipalAccessBoundaryPolicy#organization}

---

##### `PrincipalAccessBoundaryPolicyId`<sup>Required</sup> <a name="PrincipalAccessBoundaryPolicyId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.principalAccessBoundaryPolicyId"></a>

```csharp
public string PrincipalAccessBoundaryPolicyId { get; set; }
```

- *Type:* string

The ID to use to create the principal access boundary policy.

This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, hyphens, or dots. Pattern, /a-z{2,62}/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#principal_access_boundary_policy_id IamPrincipalAccessBoundaryPolicy#principal_access_boundary_policy_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#annotations IamPrincipalAccessBoundaryPolicy#annotations}

---

##### `Details`<sup>Optional</sup> <a name="Details" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.details"></a>

```csharp
public IamPrincipalAccessBoundaryPolicyDetails Details { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#details IamPrincipalAccessBoundaryPolicy#details}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The description of the principal access boundary policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#display_name IamPrincipalAccessBoundaryPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#id IamPrincipalAccessBoundaryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.timeouts"></a>

```csharp
public IamPrincipalAccessBoundaryPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#timeouts IamPrincipalAccessBoundaryPolicy#timeouts}

---

### IamPrincipalAccessBoundaryPolicyDetails <a name="IamPrincipalAccessBoundaryPolicyDetails" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamPrincipalAccessBoundaryPolicyDetails {
    object Rules,
    string EnforcementVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.property.rules">Rules</a></code> | <code>object</code> | rules block. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.property.enforcementVersion">EnforcementVersion</a></code> | <code>string</code> | The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released. |

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#rules IamPrincipalAccessBoundaryPolicy#rules}

---

##### `EnforcementVersion`<sup>Optional</sup> <a name="EnforcementVersion" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.property.enforcementVersion"></a>

```csharp
public string EnforcementVersion { get; set; }
```

- *Type:* string

The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#enforcement_version IamPrincipalAccessBoundaryPolicy#enforcement_version}

---

### IamPrincipalAccessBoundaryPolicyDetailsRules <a name="IamPrincipalAccessBoundaryPolicyDetailsRules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamPrincipalAccessBoundaryPolicyDetailsRules {
    string Effect,
    string[] Resources,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.effect">Effect</a></code> | <code>string</code> | The access relationship of principals to the resources in this rule. Possible values: ALLOW. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.resources">Resources</a></code> | <code>string[]</code> | A list of Cloud Resource Manager resources. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.description">Description</a></code> | <code>string</code> | The description of the principal access boundary policy rule. Must be less than or equal to 256 characters. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

The access relationship of principals to the resources in this rule. Possible values: ALLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#effect IamPrincipalAccessBoundaryPolicy#effect}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

A list of Cloud Resource Manager resources.

The resource
and all the descendants are included. The number of resources in a policy
is limited to 500 across all rules.
The following resource types are supported:

* Organizations, such as '//cloudresourcemanager.googleapis.com/organizations/123'.
* Folders, such as '//cloudresourcemanager.googleapis.com/folders/123'.
* Projects, such as '//cloudresourcemanager.googleapis.com/projects/123'
  or '//cloudresourcemanager.googleapis.com/projects/my-project-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#resources IamPrincipalAccessBoundaryPolicy#resources}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the principal access boundary policy rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#description IamPrincipalAccessBoundaryPolicy#description}

---

### IamPrincipalAccessBoundaryPolicyTimeouts <a name="IamPrincipalAccessBoundaryPolicyTimeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamPrincipalAccessBoundaryPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#create IamPrincipalAccessBoundaryPolicy#create}. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#delete IamPrincipalAccessBoundaryPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#update IamPrincipalAccessBoundaryPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#create IamPrincipalAccessBoundaryPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#delete IamPrincipalAccessBoundaryPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/iam_principal_access_boundary_policy#update IamPrincipalAccessBoundaryPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamPrincipalAccessBoundaryPolicyDetailsOutputReference <a name="IamPrincipalAccessBoundaryPolicyDetailsOutputReference" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamPrincipalAccessBoundaryPolicyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resetEnforcementVersion">ResetEnforcementVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* object

---

##### `ResetEnforcementVersion` <a name="ResetEnforcementVersion" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resetEnforcementVersion"></a>

```csharp
private void ResetEnforcementVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList">IamPrincipalAccessBoundaryPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersionInput">EnforcementVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersion">EnforcementVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rules"></a>

```csharp
public IamPrincipalAccessBoundaryPolicyDetailsRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList">IamPrincipalAccessBoundaryPolicyDetailsRulesList</a>

---

##### `EnforcementVersionInput`<sup>Optional</sup> <a name="EnforcementVersionInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersionInput"></a>

```csharp
public string EnforcementVersionInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `EnforcementVersion`<sup>Required</sup> <a name="EnforcementVersion" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersion"></a>

```csharp
public string EnforcementVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.internalValue"></a>

```csharp
public IamPrincipalAccessBoundaryPolicyDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a>

---


### IamPrincipalAccessBoundaryPolicyDetailsRulesList <a name="IamPrincipalAccessBoundaryPolicyDetailsRulesList" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamPrincipalAccessBoundaryPolicyDetailsRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.get"></a>

```csharp
private IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference <a name="IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference <a name="IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



