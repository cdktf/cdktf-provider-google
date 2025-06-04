# `secretManagerSecretVersion` Submodule <a name="`secretManagerSecretVersion` Submodule" id="@cdktf/provider-google.secretManagerSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerSecretVersion <a name="SecretManagerSecretVersion" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version google_secret_manager_secret_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretVersion(Construct Scope, string Id, SecretManagerSecretVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig">SecretManagerSecretVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig">SecretManagerSecretVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetIsSecretDataBase64">ResetIsSecretDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetSecretData">ResetSecretData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetSecretDataWo">ResetSecretDataWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetSecretDataWoVersion">ResetSecretDataWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.putTimeouts"></a>

```csharp
private void PutTimeouts(SecretManagerSecretVersionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeouts">SecretManagerSecretVersionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsSecretDataBase64` <a name="ResetIsSecretDataBase64" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetIsSecretDataBase64"></a>

```csharp
private void ResetIsSecretDataBase64()
```

##### `ResetSecretData` <a name="ResetSecretData" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetSecretData"></a>

```csharp
private void ResetSecretData()
```

##### `ResetSecretDataWo` <a name="ResetSecretDataWo" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetSecretDataWo"></a>

```csharp
private void ResetSecretDataWo()
```

##### `ResetSecretDataWoVersion` <a name="ResetSecretDataWoVersion" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetSecretDataWoVersion"></a>

```csharp
private void ResetSecretDataWoVersion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecretManagerSecretVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecretManagerSecretVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecretManagerSecretVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecretManagerSecretVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecretManagerSecretVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecretManagerSecretVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretManagerSecretVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretManagerSecretVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecretManagerSecretVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.destroyTime">DestroyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference">SecretManagerSecretVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.isSecretDataBase64Input">IsSecretDataBase64Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.secretDataInput">SecretDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.secretDataWoInput">SecretDataWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.secretDataWoVersionInput">SecretDataWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.isSecretDataBase64">IsSecretDataBase64</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.secretData">SecretData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.secretDataWo">SecretDataWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.secretDataWoVersion">SecretDataWoVersion</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DestroyTime`<sup>Required</sup> <a name="DestroyTime" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.destroyTime"></a>

```csharp
public string DestroyTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.timeouts"></a>

```csharp
public SecretManagerSecretVersionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference">SecretManagerSecretVersionTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsSecretDataBase64Input`<sup>Optional</sup> <a name="IsSecretDataBase64Input" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.isSecretDataBase64Input"></a>

```csharp
public object IsSecretDataBase64Input { get; }
```

- *Type:* object

---

##### `SecretDataInput`<sup>Optional</sup> <a name="SecretDataInput" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.secretDataInput"></a>

```csharp
public string SecretDataInput { get; }
```

- *Type:* string

---

##### `SecretDataWoInput`<sup>Optional</sup> <a name="SecretDataWoInput" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.secretDataWoInput"></a>

```csharp
public string SecretDataWoInput { get; }
```

- *Type:* string

---

##### `SecretDataWoVersionInput`<sup>Optional</sup> <a name="SecretDataWoVersionInput" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.secretDataWoVersionInput"></a>

```csharp
public double SecretDataWoVersionInput { get; }
```

- *Type:* double

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsSecretDataBase64`<sup>Required</sup> <a name="IsSecretDataBase64" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.isSecretDataBase64"></a>

```csharp
public object IsSecretDataBase64 { get; }
```

- *Type:* object

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `SecretData`<sup>Required</sup> <a name="SecretData" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.secretData"></a>

```csharp
public string SecretData { get; }
```

- *Type:* string

---

##### `SecretDataWo`<sup>Required</sup> <a name="SecretDataWo" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.secretDataWo"></a>

```csharp
public string SecretDataWo { get; }
```

- *Type:* string

---

##### `SecretDataWoVersion`<sup>Required</sup> <a name="SecretDataWoVersion" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.secretDataWoVersion"></a>

```csharp
public double SecretDataWoVersion { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerSecretVersionConfig <a name="SecretManagerSecretVersionConfig" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Secret,
    string DeletionPolicy = null,
    object Enabled = null,
    string Id = null,
    object IsSecretDataBase64 = null,
    string SecretData = null,
    string SecretDataWo = null,
    double SecretDataWoVersion = null,
    SecretManagerSecretVersionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.secret">Secret</a></code> | <code>string</code> | Secret Manager secret resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | The deletion policy for the secret version. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.enabled">Enabled</a></code> | <code>object</code> | The current state of the SecretVersion. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#id SecretManagerSecretVersion#id}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.isSecretDataBase64">IsSecretDataBase64</a></code> | <code>object</code> | If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.secretData">SecretData</a></code> | <code>string</code> | The secret data. Must be no larger than 64KiB. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.secretDataWo">SecretDataWo</a></code> | <code>string</code> | The secret data. Must be no larger than 64KiB. For more info see [updating write-only attributes](/docs/providers/google/guides/using_write_only_attributes.html#updating-write-only-attributes). |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.secretDataWoVersion">SecretDataWoVersion</a></code> | <code>double</code> | Triggers update of secret data write-only. For more info see [updating write-only attributes](/docs/providers/google/guides/using_write_only_attributes.html#updating-write-only-attributes). |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeouts">SecretManagerSecretVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

Secret Manager secret resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#secret SecretManagerSecretVersion#secret}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

The deletion policy for the secret version.

Setting 'ABANDON' allows the resource
to be abandoned rather than deleted. Setting 'DISABLE' allows the resource to be
disabled rather than deleted. Default is 'DELETE'. Possible values are:

* DELETE
* DISABLE
* ABANDON

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#deletion_policy SecretManagerSecretVersion#deletion_policy}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

The current state of the SecretVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#enabled SecretManagerSecretVersion#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#id SecretManagerSecretVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsSecretDataBase64`<sup>Optional</sup> <a name="IsSecretDataBase64" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.isSecretDataBase64"></a>

```csharp
public object IsSecretDataBase64 { get; set; }
```

- *Type:* object

If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#is_secret_data_base64 SecretManagerSecretVersion#is_secret_data_base64}

---

##### `SecretData`<sup>Optional</sup> <a name="SecretData" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.secretData"></a>

```csharp
public string SecretData { get; set; }
```

- *Type:* string

The secret data. Must be no larger than 64KiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#secret_data SecretManagerSecretVersion#secret_data}

---

##### `SecretDataWo`<sup>Optional</sup> <a name="SecretDataWo" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.secretDataWo"></a>

```csharp
public string SecretDataWo { get; set; }
```

- *Type:* string

The secret data. Must be no larger than 64KiB. For more info see [updating write-only attributes](/docs/providers/google/guides/using_write_only_attributes.html#updating-write-only-attributes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#secret_data_wo SecretManagerSecretVersion#secret_data_wo}

---

##### `SecretDataWoVersion`<sup>Optional</sup> <a name="SecretDataWoVersion" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.secretDataWoVersion"></a>

```csharp
public double SecretDataWoVersion { get; set; }
```

- *Type:* double

Triggers update of secret data write-only. For more info see [updating write-only attributes](/docs/providers/google/guides/using_write_only_attributes.html#updating-write-only-attributes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#secret_data_wo_version SecretManagerSecretVersion#secret_data_wo_version}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionConfig.property.timeouts"></a>

```csharp
public SecretManagerSecretVersionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeouts">SecretManagerSecretVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#timeouts SecretManagerSecretVersion#timeouts}

---

### SecretManagerSecretVersionTimeouts <a name="SecretManagerSecretVersionTimeouts" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretVersionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#create SecretManagerSecretVersion#create}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#delete SecretManagerSecretVersion#delete}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#update SecretManagerSecretVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#create SecretManagerSecretVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#delete SecretManagerSecretVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_secret_version#update SecretManagerSecretVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerSecretVersionTimeoutsOutputReference <a name="SecretManagerSecretVersionTimeoutsOutputReference" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretVersionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecretVersion.SecretManagerSecretVersionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



