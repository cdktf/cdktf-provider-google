# `iamWorkforcePool` Submodule <a name="`iamWorkforcePool` Submodule" id="@cdktf/provider-google.iamWorkforcePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkforcePool <a name="IamWorkforcePool" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool google_iam_workforce_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePool(Construct Scope, string Id, IamWorkforcePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig">IamWorkforcePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig">IamWorkforcePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.putAccessRestrictions">PutAccessRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetAccessRestrictions">ResetAccessRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetSessionDuration">ResetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessRestrictions` <a name="PutAccessRestrictions" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.putAccessRestrictions"></a>

```csharp
private void PutAccessRestrictions(IamWorkforcePoolAccessRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.putAccessRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions">IamWorkforcePoolAccessRestrictions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.putTimeouts"></a>

```csharp
private void PutTimeouts(IamWorkforcePoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts">IamWorkforcePoolTimeouts</a>

---

##### `ResetAccessRestrictions` <a name="ResetAccessRestrictions" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetAccessRestrictions"></a>

```csharp
private void ResetAccessRestrictions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSessionDuration` <a name="ResetSessionDuration" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetSessionDuration"></a>

```csharp
private void ResetSessionDuration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IamWorkforcePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkforcePool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkforcePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkforcePool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkforcePool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IamWorkforcePool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamWorkforcePool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamWorkforcePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IamWorkforcePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.accessRestrictions">AccessRestrictions</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference">IamWorkforcePoolAccessRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference">IamWorkforcePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.accessRestrictionsInput">AccessRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions">IamWorkforcePoolAccessRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.sessionDurationInput">SessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.workforcePoolIdInput">WorkforcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.workforcePoolId">WorkforcePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessRestrictions`<sup>Required</sup> <a name="AccessRestrictions" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.accessRestrictions"></a>

```csharp
public IamWorkforcePoolAccessRestrictionsOutputReference AccessRestrictions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference">IamWorkforcePoolAccessRestrictionsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.timeouts"></a>

```csharp
public IamWorkforcePoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference">IamWorkforcePoolTimeoutsOutputReference</a>

---

##### `AccessRestrictionsInput`<sup>Optional</sup> <a name="AccessRestrictionsInput" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.accessRestrictionsInput"></a>

```csharp
public IamWorkforcePoolAccessRestrictions AccessRestrictionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions">IamWorkforcePoolAccessRestrictions</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `SessionDurationInput`<sup>Optional</sup> <a name="SessionDurationInput" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.sessionDurationInput"></a>

```csharp
public string SessionDurationInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkforcePoolIdInput`<sup>Optional</sup> <a name="WorkforcePoolIdInput" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.workforcePoolIdInput"></a>

```csharp
public string WorkforcePoolIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; }
```

- *Type:* string

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.workforcePoolId"></a>

```csharp
public string WorkforcePoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkforcePoolAccessRestrictions <a name="IamWorkforcePoolAccessRestrictions" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolAccessRestrictions {
    object AllowedServices = null,
    object DisableProgrammaticSignin = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions.property.allowedServices">AllowedServices</a></code> | <code>object</code> | allowed_services block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions.property.disableProgrammaticSignin">DisableProgrammaticSignin</a></code> | <code>object</code> | Disable programmatic sign-in by disabling token issue via the Security Token API endpoint. See [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest). |

---

##### `AllowedServices`<sup>Optional</sup> <a name="AllowedServices" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions.property.allowedServices"></a>

```csharp
public object AllowedServices { get; set; }
```

- *Type:* object

allowed_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#allowed_services IamWorkforcePool#allowed_services}

---

##### `DisableProgrammaticSignin`<sup>Optional</sup> <a name="DisableProgrammaticSignin" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions.property.disableProgrammaticSignin"></a>

```csharp
public object DisableProgrammaticSignin { get; set; }
```

- *Type:* object

Disable programmatic sign-in by disabling token issue via the Security Token API endpoint. See [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#disable_programmatic_signin IamWorkforcePool#disable_programmatic_signin}

---

### IamWorkforcePoolAccessRestrictionsAllowedServices <a name="IamWorkforcePoolAccessRestrictionsAllowedServices" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolAccessRestrictionsAllowedServices {
    string Domain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices.property.domain">Domain</a></code> | <code>string</code> | Domain name of the service. Example: console.cloud.google. |

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServices.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Domain name of the service. Example: console.cloud.google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#domain IamWorkforcePool#domain}

---

### IamWorkforcePoolConfig <a name="IamWorkforcePoolConfig" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Parent,
    string WorkforcePoolId,
    IamWorkforcePoolAccessRestrictions AccessRestrictions = null,
    string Description = null,
    object Disabled = null,
    string DisplayName = null,
    string Id = null,
    string SessionDuration = null,
    IamWorkforcePoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.parent">Parent</a></code> | <code>string</code> | Immutable. The resource name of the parent. Format: 'organizations/{org-id}'. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.workforcePoolId">WorkforcePoolId</a></code> | <code>string</code> | The name of the pool. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.accessRestrictions">AccessRestrictions</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions">IamWorkforcePoolAccessRestrictions</a></code> | access_restrictions block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.description">Description</a></code> | <code>string</code> | A user-specified description of the pool. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.disabled">Disabled</a></code> | <code>object</code> | Whether the pool is disabled. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#id IamWorkforcePool#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | Duration that the Google Cloud access tokens, console sign-in sessions, and 'gcloud' sign-in sessions from this pool are valid. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts">IamWorkforcePoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#location IamWorkforcePool#location}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Immutable. The resource name of the parent. Format: 'organizations/{org-id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#parent IamWorkforcePool#parent}

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.workforcePoolId"></a>

```csharp
public string WorkforcePoolId { get; set; }
```

- *Type:* string

The name of the pool.

The ID must be a globally unique string of 6 to 63 lowercase letters,
digits, or hyphens. It must start with a letter, and cannot have a trailing hyphen.
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#workforce_pool_id IamWorkforcePool#workforce_pool_id}

---

##### `AccessRestrictions`<sup>Optional</sup> <a name="AccessRestrictions" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.accessRestrictions"></a>

```csharp
public IamWorkforcePoolAccessRestrictions AccessRestrictions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions">IamWorkforcePoolAccessRestrictions</a>

access_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#access_restrictions IamWorkforcePool#access_restrictions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A user-specified description of the pool. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#description IamWorkforcePool#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Whether the pool is disabled.

You cannot use a disabled pool to exchange tokens,
or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#disabled IamWorkforcePool#disabled}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#display_name IamWorkforcePool#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#id IamWorkforcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SessionDuration`<sup>Optional</sup> <a name="SessionDuration" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; set; }
```

- *Type:* string

Duration that the Google Cloud access tokens, console sign-in sessions, and 'gcloud' sign-in sessions from this pool are valid.

Must be greater than 15 minutes (900s) and less than 12 hours (43200s).
If 'sessionDuration' is not configured, minted credentials have a default duration of one hour (3600s).
A duration in seconds with up to nine fractional digits, ending with ''s''. Example: "'3.5s'".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#session_duration IamWorkforcePool#session_duration}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolConfig.property.timeouts"></a>

```csharp
public IamWorkforcePoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts">IamWorkforcePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#timeouts IamWorkforcePool#timeouts}

---

### IamWorkforcePoolTimeouts <a name="IamWorkforcePoolTimeouts" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#create IamWorkforcePool#create}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#delete IamWorkforcePool#delete}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#update IamWorkforcePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#create IamWorkforcePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#delete IamWorkforcePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/iam_workforce_pool#update IamWorkforcePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkforcePoolAccessRestrictionsAllowedServicesList <a name="IamWorkforcePoolAccessRestrictionsAllowedServicesList" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolAccessRestrictionsAllowedServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.get"></a>

```csharp
private IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference <a name="IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.resetDomain"></a>

```csharp
private void ResetDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IamWorkforcePoolAccessRestrictionsOutputReference <a name="IamWorkforcePoolAccessRestrictionsOutputReference" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolAccessRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.putAllowedServices">PutAllowedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.resetAllowedServices">ResetAllowedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.resetDisableProgrammaticSignin">ResetDisableProgrammaticSignin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedServices` <a name="PutAllowedServices" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.putAllowedServices"></a>

```csharp
private void PutAllowedServices(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.putAllowedServices.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowedServices` <a name="ResetAllowedServices" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.resetAllowedServices"></a>

```csharp
private void ResetAllowedServices()
```

##### `ResetDisableProgrammaticSignin` <a name="ResetDisableProgrammaticSignin" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.resetDisableProgrammaticSignin"></a>

```csharp
private void ResetDisableProgrammaticSignin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.allowedServices">AllowedServices</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList">IamWorkforcePoolAccessRestrictionsAllowedServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.allowedServicesInput">AllowedServicesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.disableProgrammaticSigninInput">DisableProgrammaticSigninInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.disableProgrammaticSignin">DisableProgrammaticSignin</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions">IamWorkforcePoolAccessRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedServices`<sup>Required</sup> <a name="AllowedServices" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.allowedServices"></a>

```csharp
public IamWorkforcePoolAccessRestrictionsAllowedServicesList AllowedServices { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsAllowedServicesList">IamWorkforcePoolAccessRestrictionsAllowedServicesList</a>

---

##### `AllowedServicesInput`<sup>Optional</sup> <a name="AllowedServicesInput" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.allowedServicesInput"></a>

```csharp
public object AllowedServicesInput { get; }
```

- *Type:* object

---

##### `DisableProgrammaticSigninInput`<sup>Optional</sup> <a name="DisableProgrammaticSigninInput" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.disableProgrammaticSigninInput"></a>

```csharp
public object DisableProgrammaticSigninInput { get; }
```

- *Type:* object

---

##### `DisableProgrammaticSignin`<sup>Required</sup> <a name="DisableProgrammaticSignin" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.disableProgrammaticSignin"></a>

```csharp
public object DisableProgrammaticSignin { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictionsOutputReference.property.internalValue"></a>

```csharp
public IamWorkforcePoolAccessRestrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolAccessRestrictions">IamWorkforcePoolAccessRestrictions</a>

---


### IamWorkforcePoolTimeoutsOutputReference <a name="IamWorkforcePoolTimeoutsOutputReference" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkforcePool.IamWorkforcePoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



