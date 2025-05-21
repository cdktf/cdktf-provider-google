# `secretManagerRegionalSecretVersion` Submodule <a name="`secretManagerRegionalSecretVersion` Submodule" id="@cdktf/provider-google.secretManagerRegionalSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerRegionalSecretVersion <a name="SecretManagerRegionalSecretVersion" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/secret_manager_regional_secret_version google_secret_manager_regional_secret_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerRegionalSecretVersion(Construct Scope, string Id, SecretManagerRegionalSecretVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig">SecretManagerRegionalSecretVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig">SecretManagerRegionalSecretVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetIsSecretDataBase64">ResetIsSecretDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.putTimeouts"></a>

```csharp
private void PutTimeouts(SecretManagerRegionalSecretVersionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts">SecretManagerRegionalSecretVersionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsSecretDataBase64` <a name="ResetIsSecretDataBase64" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetIsSecretDataBase64"></a>

```csharp
private void ResetIsSecretDataBase64()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecretManagerRegionalSecretVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecretManagerRegionalSecretVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecretManagerRegionalSecretVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecretManagerRegionalSecretVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecretManagerRegionalSecretVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecretManagerRegionalSecretVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretManagerRegionalSecretVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretManagerRegionalSecretVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/secret_manager_regional_secret_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecretManagerRegionalSecretVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList">SecretManagerRegionalSecretVersionCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.destroyTime">DestroyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference">SecretManagerRegionalSecretVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.isSecretDataBase64Input">IsSecretDataBase64Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.secretDataInput">SecretDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.isSecretDataBase64">IsSecretDataBase64</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.secretData">SecretData</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CustomerManagedEncryption`<sup>Required</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.customerManagedEncryption"></a>

```csharp
public SecretManagerRegionalSecretVersionCustomerManagedEncryptionList CustomerManagedEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList">SecretManagerRegionalSecretVersionCustomerManagedEncryptionList</a>

---

##### `DestroyTime`<sup>Required</sup> <a name="DestroyTime" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.destroyTime"></a>

```csharp
public string DestroyTime { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.timeouts"></a>

```csharp
public SecretManagerRegionalSecretVersionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference">SecretManagerRegionalSecretVersionTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsSecretDataBase64Input`<sup>Optional</sup> <a name="IsSecretDataBase64Input" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.isSecretDataBase64Input"></a>

```csharp
public object IsSecretDataBase64Input { get; }
```

- *Type:* object

---

##### `SecretDataInput`<sup>Optional</sup> <a name="SecretDataInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.secretDataInput"></a>

```csharp
public string SecretDataInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsSecretDataBase64`<sup>Required</sup> <a name="IsSecretDataBase64" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.isSecretDataBase64"></a>

```csharp
public object IsSecretDataBase64 { get; }
```

- *Type:* object

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `SecretData`<sup>Required</sup> <a name="SecretData" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.secretData"></a>

```csharp
public string SecretData { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerRegionalSecretVersionConfig <a name="SecretManagerRegionalSecretVersionConfig" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerRegionalSecretVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Secret,
    string SecretData,
    string DeletionPolicy = null,
    object Enabled = null,
    string Id = null,
    object IsSecretDataBase64 = null,
    SecretManagerRegionalSecretVersionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.secret">Secret</a></code> | <code>string</code> | Secret Manager regional secret resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.secretData">SecretData</a></code> | <code>string</code> | The secret data. Must be no larger than 64KiB. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | The deletion policy for the regional secret version. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.enabled">Enabled</a></code> | <code>object</code> | The current state of the regional secret version. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/secret_manager_regional_secret_version#id SecretManagerRegionalSecretVersion#id}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.isSecretDataBase64">IsSecretDataBase64</a></code> | <code>object</code> | If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts">SecretManagerRegionalSecretVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

Secret Manager regional secret resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/secret_manager_regional_secret_version#secret SecretManagerRegionalSecretVersion#secret}

---

##### `SecretData`<sup>Required</sup> <a name="SecretData" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.secretData"></a>

```csharp
public string SecretData { get; set; }
```

- *Type:* string

The secret data. Must be no larger than 64KiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/secret_manager_regional_secret_version#secret_data SecretManagerRegionalSecretVersion#secret_data}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

The deletion policy for the regional secret version.

Setting 'ABANDON' allows the resource
to be abandoned rather than deleted. Setting 'DISABLE' allows the resource to be
disabled rather than deleted. Default is 'DELETE'. Possible values are:

* DELETE
* DISABLE
* ABANDON

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/secret_manager_regional_secret_version#deletion_policy SecretManagerRegionalSecretVersion#deletion_policy}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

The current state of the regional secret version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/secret_manager_regional_secret_version#enabled SecretManagerRegionalSecretVersion#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/secret_manager_regional_secret_version#id SecretManagerRegionalSecretVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsSecretDataBase64`<sup>Optional</sup> <a name="IsSecretDataBase64" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.isSecretDataBase64"></a>

```csharp
public object IsSecretDataBase64 { get; set; }
```

- *Type:* object

If set to 'true', the secret data is expected to be base64-encoded string and would be sent as is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/secret_manager_regional_secret_version#is_secret_data_base64 SecretManagerRegionalSecretVersion#is_secret_data_base64}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionConfig.property.timeouts"></a>

```csharp
public SecretManagerRegionalSecretVersionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts">SecretManagerRegionalSecretVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/secret_manager_regional_secret_version#timeouts SecretManagerRegionalSecretVersion#timeouts}

---

### SecretManagerRegionalSecretVersionCustomerManagedEncryption <a name="SecretManagerRegionalSecretVersionCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerRegionalSecretVersionCustomerManagedEncryption {

};
```


### SecretManagerRegionalSecretVersionTimeouts <a name="SecretManagerRegionalSecretVersionTimeouts" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerRegionalSecretVersionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/secret_manager_regional_secret_version#create SecretManagerRegionalSecretVersion#create}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/secret_manager_regional_secret_version#delete SecretManagerRegionalSecretVersion#delete}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/secret_manager_regional_secret_version#update SecretManagerRegionalSecretVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/secret_manager_regional_secret_version#create SecretManagerRegionalSecretVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/secret_manager_regional_secret_version#delete SecretManagerRegionalSecretVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/secret_manager_regional_secret_version#update SecretManagerRegionalSecretVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerRegionalSecretVersionCustomerManagedEncryptionList <a name="SecretManagerRegionalSecretVersionCustomerManagedEncryptionList" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerRegionalSecretVersionCustomerManagedEncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.get"></a>

```csharp
private SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference <a name="SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.kmsKeyVersionName">KmsKeyVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryption">SecretManagerRegionalSecretVersionCustomerManagedEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyVersionName`<sup>Required</sup> <a name="KmsKeyVersionName" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.kmsKeyVersionName"></a>

```csharp
public string KmsKeyVersionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```csharp
public SecretManagerRegionalSecretVersionCustomerManagedEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionCustomerManagedEncryption">SecretManagerRegionalSecretVersionCustomerManagedEncryption</a>

---


### SecretManagerRegionalSecretVersionTimeoutsOutputReference <a name="SecretManagerRegionalSecretVersionTimeoutsOutputReference" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerRegionalSecretVersionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerRegionalSecretVersion.SecretManagerRegionalSecretVersionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



