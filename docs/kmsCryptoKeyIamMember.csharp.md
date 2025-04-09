# `kmsCryptoKeyIamMember` Submodule <a name="`kmsCryptoKeyIamMember` Submodule" id="@cdktf/provider-google.kmsCryptoKeyIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsCryptoKeyIamMember <a name="KmsCryptoKeyIamMember" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member google_kms_crypto_key_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new KmsCryptoKeyIamMember(Construct Scope, string Id, KmsCryptoKeyIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig">KmsCryptoKeyIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig">KmsCryptoKeyIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.putCondition"></a>

```csharp
private void PutCondition(KmsCryptoKeyIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberCondition">KmsCryptoKeyIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KmsCryptoKeyIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

KmsCryptoKeyIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

KmsCryptoKeyIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

KmsCryptoKeyIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

KmsCryptoKeyIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KmsCryptoKeyIamMember resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmsCryptoKeyIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmsCryptoKeyIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KmsCryptoKeyIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference">KmsCryptoKeyIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberCondition">KmsCryptoKeyIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.cryptoKeyIdInput">CryptoKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.cryptoKeyId">CryptoKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.condition"></a>

```csharp
public KmsCryptoKeyIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference">KmsCryptoKeyIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.conditionInput"></a>

```csharp
public KmsCryptoKeyIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberCondition">KmsCryptoKeyIamMemberCondition</a>

---

##### `CryptoKeyIdInput`<sup>Optional</sup> <a name="CryptoKeyIdInput" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.cryptoKeyIdInput"></a>

```csharp
public string CryptoKeyIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `CryptoKeyId`<sup>Required</sup> <a name="CryptoKeyId" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.cryptoKeyId"></a>

```csharp
public string CryptoKeyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsCryptoKeyIamMemberCondition <a name="KmsCryptoKeyIamMemberCondition" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new KmsCryptoKeyIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member#expression KmsCryptoKeyIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member#title KmsCryptoKeyIamMember#title}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member#description KmsCryptoKeyIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member#expression KmsCryptoKeyIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member#title KmsCryptoKeyIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member#description KmsCryptoKeyIamMember#description}.

---

### KmsCryptoKeyIamMemberConfig <a name="KmsCryptoKeyIamMemberConfig" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new KmsCryptoKeyIamMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CryptoKeyId,
    string Member,
    string Role,
    KmsCryptoKeyIamMemberCondition Condition = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.cryptoKeyId">CryptoKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member#crypto_key_id KmsCryptoKeyIamMember#crypto_key_id}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member#member KmsCryptoKeyIamMember#member}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member#role KmsCryptoKeyIamMember#role}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberCondition">KmsCryptoKeyIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member#id KmsCryptoKeyIamMember#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CryptoKeyId`<sup>Required</sup> <a name="CryptoKeyId" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.cryptoKeyId"></a>

```csharp
public string CryptoKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member#crypto_key_id KmsCryptoKeyIamMember#crypto_key_id}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member#member KmsCryptoKeyIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member#role KmsCryptoKeyIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.condition"></a>

```csharp
public KmsCryptoKeyIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberCondition">KmsCryptoKeyIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member#condition KmsCryptoKeyIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/kms_crypto_key_iam_member#id KmsCryptoKeyIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsCryptoKeyIamMemberConditionOutputReference <a name="KmsCryptoKeyIamMemberConditionOutputReference" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new KmsCryptoKeyIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberCondition">KmsCryptoKeyIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public KmsCryptoKeyIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyIamMember.KmsCryptoKeyIamMemberCondition">KmsCryptoKeyIamMemberCondition</a>

---



