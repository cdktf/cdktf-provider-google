# `iamWorkforcePoolProviderKey` Submodule <a name="`iamWorkforcePoolProviderKey` Submodule" id="@cdktf/provider-google.iamWorkforcePoolProviderKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkforcePoolProviderKey <a name="IamWorkforcePoolProviderKey" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/iam_workforce_pool_provider_key google_iam_workforce_pool_provider_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderKey(Construct Scope, string Id, IamWorkforcePoolProviderKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig">IamWorkforcePoolProviderKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig">IamWorkforcePoolProviderKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putKeyData">PutKeyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKeyData` <a name="PutKeyData" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putKeyData"></a>

```csharp
private void PutKeyData(IamWorkforcePoolProviderKeyKeyData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putKeyData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putTimeouts"></a>

```csharp
private void PutTimeouts(IamWorkforcePoolProviderKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IamWorkforcePoolProviderKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkforcePoolProviderKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkforcePoolProviderKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkforcePoolProviderKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkforcePoolProviderKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IamWorkforcePoolProviderKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamWorkforcePoolProviderKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamWorkforcePoolProviderKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/iam_workforce_pool_provider_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IamWorkforcePoolProviderKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyData">KeyData</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference">IamWorkforcePoolProviderKeyKeyDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference">IamWorkforcePoolProviderKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyDataInput">KeyDataInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.providerIdInput">ProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.useInput">UseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.workforcePoolIdInput">WorkforcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.providerId">ProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.use">Use</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.workforcePoolId">WorkforcePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `KeyData`<sup>Required</sup> <a name="KeyData" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyData"></a>

```csharp
public IamWorkforcePoolProviderKeyKeyDataOutputReference KeyData { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference">IamWorkforcePoolProviderKeyKeyDataOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.timeouts"></a>

```csharp
public IamWorkforcePoolProviderKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference">IamWorkforcePoolProviderKeyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyDataInput`<sup>Optional</sup> <a name="KeyDataInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyDataInput"></a>

```csharp
public IamWorkforcePoolProviderKeyKeyData KeyDataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a>

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProviderIdInput`<sup>Optional</sup> <a name="ProviderIdInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.providerIdInput"></a>

```csharp
public string ProviderIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UseInput`<sup>Optional</sup> <a name="UseInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.useInput"></a>

```csharp
public string UseInput { get; }
```

- *Type:* string

---

##### `WorkforcePoolIdInput`<sup>Optional</sup> <a name="WorkforcePoolIdInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.workforcePoolIdInput"></a>

```csharp
public string WorkforcePoolIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.providerId"></a>

```csharp
public string ProviderId { get; }
```

- *Type:* string

---

##### `Use`<sup>Required</sup> <a name="Use" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.use"></a>

```csharp
public string Use { get; }
```

- *Type:* string

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.workforcePoolId"></a>

```csharp
public string WorkforcePoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkforcePoolProviderKeyConfig <a name="IamWorkforcePoolProviderKeyConfig" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    IamWorkforcePoolProviderKeyKeyData KeyData,
    string KeyId,
    string Location,
    string ProviderId,
    string Use,
    string WorkforcePoolId,
    string Id = null,
    IamWorkforcePoolProviderKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.keyData">KeyData</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a></code> | key_data block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.keyId">KeyId</a></code> | <code>string</code> | The ID to use for the key, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.providerId">ProviderId</a></code> | <code>string</code> | The ID of the provider. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.use">Use</a></code> | <code>string</code> | The purpose of the key. Possible values: ["ENCRYPTION"]. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.workforcePoolId">WorkforcePoolId</a></code> | <code>string</code> | The ID of the workforce pool. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/iam_workforce_pool_provider_key#id IamWorkforcePoolProviderKey#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KeyData`<sup>Required</sup> <a name="KeyData" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.keyData"></a>

```csharp
public IamWorkforcePoolProviderKeyKeyData KeyData { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a>

key_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/iam_workforce_pool_provider_key#key_data IamWorkforcePoolProviderKey#key_data}

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

The ID to use for the key, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/iam_workforce_pool_provider_key#key_id IamWorkforcePoolProviderKey#key_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/iam_workforce_pool_provider_key#location IamWorkforcePoolProviderKey#location}

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.providerId"></a>

```csharp
public string ProviderId { get; set; }
```

- *Type:* string

The ID of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/iam_workforce_pool_provider_key#provider_id IamWorkforcePoolProviderKey#provider_id}

---

##### `Use`<sup>Required</sup> <a name="Use" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.use"></a>

```csharp
public string Use { get; set; }
```

- *Type:* string

The purpose of the key. Possible values: ["ENCRYPTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/iam_workforce_pool_provider_key#use IamWorkforcePoolProviderKey#use}

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.workforcePoolId"></a>

```csharp
public string WorkforcePoolId { get; set; }
```

- *Type:* string

The ID of the workforce pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/iam_workforce_pool_provider_key#workforce_pool_id IamWorkforcePoolProviderKey#workforce_pool_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/iam_workforce_pool_provider_key#id IamWorkforcePoolProviderKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.timeouts"></a>

```csharp
public IamWorkforcePoolProviderKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/iam_workforce_pool_provider_key#timeouts IamWorkforcePoolProviderKey#timeouts}

---

### IamWorkforcePoolProviderKeyKeyData <a name="IamWorkforcePoolProviderKeyKeyData" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderKeyKeyData {
    string KeySpec
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData.property.keySpec">KeySpec</a></code> | <code>string</code> | The specifications for the key. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096"]. |

---

##### `KeySpec`<sup>Required</sup> <a name="KeySpec" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData.property.keySpec"></a>

```csharp
public string KeySpec { get; set; }
```

- *Type:* string

The specifications for the key. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/iam_workforce_pool_provider_key#key_spec IamWorkforcePoolProviderKey#key_spec}

---

### IamWorkforcePoolProviderKeyTimeouts <a name="IamWorkforcePoolProviderKeyTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderKeyTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/iam_workforce_pool_provider_key#create IamWorkforcePoolProviderKey#create}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/iam_workforce_pool_provider_key#delete IamWorkforcePoolProviderKey#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/iam_workforce_pool_provider_key#create IamWorkforcePoolProviderKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/iam_workforce_pool_provider_key#delete IamWorkforcePoolProviderKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkforcePoolProviderKeyKeyDataOutputReference <a name="IamWorkforcePoolProviderKeyKeyDataOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderKeyKeyDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.notAfterTime">NotAfterTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.notBeforeTime">NotBeforeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpecInput">KeySpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpec">KeySpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `NotAfterTime`<sup>Required</sup> <a name="NotAfterTime" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.notAfterTime"></a>

```csharp
public string NotAfterTime { get; }
```

- *Type:* string

---

##### `NotBeforeTime`<sup>Required</sup> <a name="NotBeforeTime" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.notBeforeTime"></a>

```csharp
public string NotBeforeTime { get; }
```

- *Type:* string

---

##### `KeySpecInput`<sup>Optional</sup> <a name="KeySpecInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpecInput"></a>

```csharp
public string KeySpecInput { get; }
```

- *Type:* string

---

##### `KeySpec`<sup>Required</sup> <a name="KeySpec" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpec"></a>

```csharp
public string KeySpec { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.internalValue"></a>

```csharp
public IamWorkforcePoolProviderKeyKeyData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a>

---


### IamWorkforcePoolProviderKeyTimeoutsOutputReference <a name="IamWorkforcePoolProviderKeyTimeoutsOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkforcePoolProviderKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



