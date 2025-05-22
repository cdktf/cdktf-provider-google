# `secretManagerSecret` Submodule <a name="`secretManagerSecret` Submodule" id="@cdktf/provider-google.secretManagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerSecret <a name="SecretManagerSecret" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret google_secret_manager_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecret(Construct Scope, string Id, SecretManagerSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig">SecretManagerSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig">SecretManagerSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putReplication">PutReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putRotation">PutRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTopics">PutTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetExpireTime">ResetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetRotation">ResetRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTopics">ResetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetVersionAliases">ResetVersionAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetVersionDestroyTtl">ResetVersionDestroyTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReplication` <a name="PutReplication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putReplication"></a>

```csharp
private void PutReplication(SecretManagerSecretReplication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a>

---

##### `PutRotation` <a name="PutRotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putRotation"></a>

```csharp
private void PutRotation(SecretManagerSecretRotation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putRotation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTimeouts"></a>

```csharp
private void PutTimeouts(SecretManagerSecretTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a>

---

##### `PutTopics` <a name="PutTopics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTopics"></a>

```csharp
private void PutTopics(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.putTopics.parameter.value"></a>

- *Type:* object

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetExpireTime` <a name="ResetExpireTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetExpireTime"></a>

```csharp
private void ResetExpireTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRotation` <a name="ResetRotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetRotation"></a>

```csharp
private void ResetRotation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTopics` <a name="ResetTopics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTopics"></a>

```csharp
private void ResetTopics()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetVersionAliases` <a name="ResetVersionAliases" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetVersionAliases"></a>

```csharp
private void ResetVersionAliases()
```

##### `ResetVersionDestroyTtl` <a name="ResetVersionDestroyTtl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.resetVersionDestroyTtl"></a>

```csharp
private void ResetVersionDestroyTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecretManagerSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecretManagerSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecretManagerSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecretManagerSecret.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecretManagerSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecretManagerSecret resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretManagerSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretManagerSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecretManagerSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.replication">Replication</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference">SecretManagerSecretReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.rotation">Rotation</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference">SecretManagerSecretRotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference">SecretManagerSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.topics">Topics</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList">SecretManagerSecretTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.expireTimeInput">ExpireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.replicationInput">ReplicationInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.rotationInput">RotationInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.topicsInput">TopicsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionAliasesInput">VersionAliasesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionDestroyTtlInput">VersionDestroyTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionAliases">VersionAliases</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionDestroyTtl">VersionDestroyTtl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Replication`<sup>Required</sup> <a name="Replication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.replication"></a>

```csharp
public SecretManagerSecretReplicationOutputReference Replication { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference">SecretManagerSecretReplicationOutputReference</a>

---

##### `Rotation`<sup>Required</sup> <a name="Rotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.rotation"></a>

```csharp
public SecretManagerSecretRotationOutputReference Rotation { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference">SecretManagerSecretRotationOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.timeouts"></a>

```csharp
public SecretManagerSecretTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference">SecretManagerSecretTimeoutsOutputReference</a>

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.topics"></a>

```csharp
public SecretManagerSecretTopicsList Topics { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList">SecretManagerSecretTopicsList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.expireTimeInput"></a>

```csharp
public string ExpireTimeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReplicationInput`<sup>Optional</sup> <a name="ReplicationInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.replicationInput"></a>

```csharp
public SecretManagerSecretReplication ReplicationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a>

---

##### `RotationInput`<sup>Optional</sup> <a name="RotationInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.rotationInput"></a>

```csharp
public SecretManagerSecretRotation RotationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a>

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TopicsInput`<sup>Optional</sup> <a name="TopicsInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.topicsInput"></a>

```csharp
public object TopicsInput { get; }
```

- *Type:* object

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `VersionAliasesInput`<sup>Optional</sup> <a name="VersionAliasesInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionAliasesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VersionAliasesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionDestroyTtlInput`<sup>Optional</sup> <a name="VersionDestroyTtlInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionDestroyTtlInput"></a>

```csharp
public string VersionDestroyTtlInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `VersionAliases`<sup>Required</sup> <a name="VersionAliases" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionAliases"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VersionAliases { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionDestroyTtl`<sup>Required</sup> <a name="VersionDestroyTtl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.versionDestroyTtl"></a>

```csharp
public string VersionDestroyTtl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerSecretConfig <a name="SecretManagerSecretConfig" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    SecretManagerSecretReplication Replication,
    string SecretId,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string ExpireTime = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    SecretManagerSecretRotation Rotation = null,
    SecretManagerSecretTimeouts Timeouts = null,
    object Topics = null,
    string Ttl = null,
    System.Collections.Generic.IDictionary<string, string> VersionAliases = null,
    string VersionDestroyTtl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.replication">Replication</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a></code> | replication block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.secretId">SecretId</a></code> | <code>string</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Custom metadata about the secret. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.expireTime">ExpireTime</a></code> | <code>string</code> | Timestamp in UTC when the Secret is scheduled to expire. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#id SecretManagerSecret#id}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels assigned to this Secret. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#project SecretManagerSecret#project}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.rotation">Rotation</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a></code> | rotation block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.topics">Topics</a></code> | <code>object</code> | topics block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.ttl">Ttl</a></code> | <code>string</code> | The TTL for the Secret. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.versionAliases">VersionAliases</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mapping from version alias to version name. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.versionDestroyTtl">VersionDestroyTtl</a></code> | <code>string</code> | Secret Version TTL after destruction request. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Replication`<sup>Required</sup> <a name="Replication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.replication"></a>

```csharp
public SecretManagerSecretReplication Replication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a>

replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#replication SecretManagerSecret#replication}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#secret_id SecretManagerSecret#secret_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Custom metadata about the secret.

Annotations are distinct from various forms of labels. Annotations exist to allow
client tools to store their own state information without requiring a database.

Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and
may have dashes (-), underscores (_), dots (.), and alphanumerics in between these
symbols.

The total size of annotation keys and values must be less than 16KiB.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#annotations SecretManagerSecret#annotations}

---

##### `ExpireTime`<sup>Optional</sup> <a name="ExpireTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.expireTime"></a>

```csharp
public string ExpireTime { get; set; }
```

- *Type:* string

Timestamp in UTC when the Secret is scheduled to expire.

This is always provided on output, regardless of what was sent on input.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
Only one of 'expire_time' or 'ttl' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#expire_time SecretManagerSecret#expire_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#id SecretManagerSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels assigned to this Secret.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#labels SecretManagerSecret#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#project SecretManagerSecret#project}.

---

##### `Rotation`<sup>Optional</sup> <a name="Rotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.rotation"></a>

```csharp
public SecretManagerSecretRotation Rotation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a>

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#rotation SecretManagerSecret#rotation}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.timeouts"></a>

```csharp
public SecretManagerSecretTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts">SecretManagerSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#timeouts SecretManagerSecret#timeouts}

---

##### `Topics`<sup>Optional</sup> <a name="Topics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.topics"></a>

```csharp
public object Topics { get; set; }
```

- *Type:* object

topics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#topics SecretManagerSecret#topics}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

The TTL for the Secret.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
Only one of 'ttl' or 'expire_time' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#ttl SecretManagerSecret#ttl}

---

##### `VersionAliases`<sup>Optional</sup> <a name="VersionAliases" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.versionAliases"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VersionAliases { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mapping from version alias to version name.

A version alias is a string with a maximum length of 63 characters and can contain
uppercase and lowercase letters, numerals, and the hyphen (-) and underscore ('_')
characters. An alias string must start with a letter and cannot be the string
'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#version_aliases SecretManagerSecret#version_aliases}

---

##### `VersionDestroyTtl`<sup>Optional</sup> <a name="VersionDestroyTtl" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretConfig.property.versionDestroyTtl"></a>

```csharp
public string VersionDestroyTtl { get; set; }
```

- *Type:* string

Secret Version TTL after destruction request.

This is a part of the delayed delete feature on Secret Version.
For secret with versionDestroyTtl>0, version destruction doesn't happen immediately
on calling destroy instead the version goes to a disabled state and
the actual destruction happens after this TTL expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#version_destroy_ttl SecretManagerSecret#version_destroy_ttl}

---

### SecretManagerSecretReplication <a name="SecretManagerSecretReplication" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretReplication {
    SecretManagerSecretReplicationAuto Auto = null,
    SecretManagerSecretReplicationUserManaged UserManaged = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.property.auto">Auto</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a></code> | auto block. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.property.userManaged">UserManaged</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a></code> | user_managed block. |

---

##### `Auto`<sup>Optional</sup> <a name="Auto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.property.auto"></a>

```csharp
public SecretManagerSecretReplicationAuto Auto { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a>

auto block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#auto SecretManagerSecret#auto}

---

##### `UserManaged`<sup>Optional</sup> <a name="UserManaged" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication.property.userManaged"></a>

```csharp
public SecretManagerSecretReplicationUserManaged UserManaged { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a>

user_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#user_managed SecretManagerSecret#user_managed}

---

### SecretManagerSecretReplicationAuto <a name="SecretManagerSecretReplicationAuto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretReplicationAuto {
    SecretManagerSecretReplicationAutoCustomerManagedEncryption CustomerManagedEncryption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a></code> | customer_managed_encryption block. |

---

##### `CustomerManagedEncryption`<sup>Optional</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto.property.customerManagedEncryption"></a>

```csharp
public SecretManagerSecretReplicationAutoCustomerManagedEncryption CustomerManagedEncryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a>

customer_managed_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#customer_managed_encryption SecretManagerSecret#customer_managed_encryption}

---

### SecretManagerSecretReplicationAutoCustomerManagedEncryption <a name="SecretManagerSecretReplicationAutoCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretReplicationAutoCustomerManagedEncryption {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#kms_key_name SecretManagerSecret#kms_key_name}

---

### SecretManagerSecretReplicationUserManaged <a name="SecretManagerSecretReplicationUserManaged" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretReplicationUserManaged {
    object Replicas
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged.property.replicas">Replicas</a></code> | <code>object</code> | replicas block. |

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged.property.replicas"></a>

```csharp
public object Replicas { get; set; }
```

- *Type:* object

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#replicas SecretManagerSecret#replicas}

---

### SecretManagerSecretReplicationUserManagedReplicas <a name="SecretManagerSecretReplicationUserManagedReplicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretReplicationUserManagedReplicas {
    string Location,
    SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption CustomerManagedEncryption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.property.location">Location</a></code> | <code>string</code> | The canonical IDs of the location to replicate data. For example: "us-east1". |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | customer_managed_encryption block. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The canonical IDs of the location to replicate data. For example: "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#location SecretManagerSecret#location}

---

##### `CustomerManagedEncryption`<sup>Optional</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicas.property.customerManagedEncryption"></a>

```csharp
public SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption CustomerManagedEncryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

customer_managed_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#customer_managed_encryption SecretManagerSecret#customer_managed_encryption}

---

### SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption <a name="SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Describes the Cloud KMS encryption key that will be used to protect destination secret. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Describes the Cloud KMS encryption key that will be used to protect destination secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#kms_key_name SecretManagerSecret#kms_key_name}

---

### SecretManagerSecretRotation <a name="SecretManagerSecretRotation" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretRotation {
    string NextRotationTime = null,
    string RotationPeriod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.property.nextRotationTime">NextRotationTime</a></code> | <code>string</code> | Timestamp in UTC at which the Secret is scheduled to rotate. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | The Duration between rotation notifications. |

---

##### `NextRotationTime`<sup>Optional</sup> <a name="NextRotationTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.property.nextRotationTime"></a>

```csharp
public string NextRotationTime { get; set; }
```

- *Type:* string

Timestamp in UTC at which the Secret is scheduled to rotate.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#next_rotation_time SecretManagerSecret#next_rotation_time}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; set; }
```

- *Type:* string

The Duration between rotation notifications.

Must be in seconds and at least 3600s (1h) and at most 3153600000s (100 years).
If rotationPeriod is set, 'next_rotation_time' must be set. 'next_rotation_time' will be advanced by this period when the service automatically sends rotation notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#rotation_period SecretManagerSecret#rotation_period}

---

### SecretManagerSecretTimeouts <a name="SecretManagerSecretTimeouts" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#create SecretManagerSecret#create}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#delete SecretManagerSecret#delete}. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#update SecretManagerSecret#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#create SecretManagerSecret#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#delete SecretManagerSecret#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#update SecretManagerSecret#update}.

---

### SecretManagerSecretTopics <a name="SecretManagerSecretTopics" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretTopics {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics.property.name">Name</a></code> | <code>string</code> | The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopics.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*.

For publication to succeed, the Secret Manager Service Agent service account must have pubsub.publisher permissions on the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/secret_manager_secret#name SecretManagerSecret#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference <a name="SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```csharp
public SecretManagerSecretReplicationAutoCustomerManagedEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a>

---


### SecretManagerSecretReplicationAutoOutputReference <a name="SecretManagerSecretReplicationAutoOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretReplicationAutoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.putCustomerManagedEncryption">PutCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resetCustomerManagedEncryption">ResetCustomerManagedEncryption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerManagedEncryption` <a name="PutCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.putCustomerManagedEncryption"></a>

```csharp
private void PutCustomerManagedEncryption(SecretManagerSecretReplicationAutoCustomerManagedEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.putCustomerManagedEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a>

---

##### `ResetCustomerManagedEncryption` <a name="ResetCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.resetCustomerManagedEncryption"></a>

```csharp
private void ResetCustomerManagedEncryption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference">SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.customerManagedEncryptionInput">CustomerManagedEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerManagedEncryption`<sup>Required</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.customerManagedEncryption"></a>

```csharp
public SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference CustomerManagedEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference">SecretManagerSecretReplicationAutoCustomerManagedEncryptionOutputReference</a>

---

##### `CustomerManagedEncryptionInput`<sup>Optional</sup> <a name="CustomerManagedEncryptionInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.customerManagedEncryptionInput"></a>

```csharp
public SecretManagerSecretReplicationAutoCustomerManagedEncryption CustomerManagedEncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoCustomerManagedEncryption">SecretManagerSecretReplicationAutoCustomerManagedEncryption</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference.property.internalValue"></a>

```csharp
public SecretManagerSecretReplicationAuto InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a>

---


### SecretManagerSecretReplicationOutputReference <a name="SecretManagerSecretReplicationOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretReplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putAuto">PutAuto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putUserManaged">PutUserManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resetAuto">ResetAuto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resetUserManaged">ResetUserManaged</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuto` <a name="PutAuto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putAuto"></a>

```csharp
private void PutAuto(SecretManagerSecretReplicationAuto Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putAuto.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a>

---

##### `PutUserManaged` <a name="PutUserManaged" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putUserManaged"></a>

```csharp
private void PutUserManaged(SecretManagerSecretReplicationUserManaged Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.putUserManaged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a>

---

##### `ResetAuto` <a name="ResetAuto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resetAuto"></a>

```csharp
private void ResetAuto()
```

##### `ResetUserManaged` <a name="ResetUserManaged" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.resetUserManaged"></a>

```csharp
private void ResetUserManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.auto">Auto</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference">SecretManagerSecretReplicationAutoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.userManaged">UserManaged</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference">SecretManagerSecretReplicationUserManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.autoInput">AutoInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.userManagedInput">UserManagedInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Auto`<sup>Required</sup> <a name="Auto" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.auto"></a>

```csharp
public SecretManagerSecretReplicationAutoOutputReference Auto { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAutoOutputReference">SecretManagerSecretReplicationAutoOutputReference</a>

---

##### `UserManaged`<sup>Required</sup> <a name="UserManaged" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.userManaged"></a>

```csharp
public SecretManagerSecretReplicationUserManagedOutputReference UserManaged { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference">SecretManagerSecretReplicationUserManagedOutputReference</a>

---

##### `AutoInput`<sup>Optional</sup> <a name="AutoInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.autoInput"></a>

```csharp
public SecretManagerSecretReplicationAuto AutoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationAuto">SecretManagerSecretReplicationAuto</a>

---

##### `UserManagedInput`<sup>Optional</sup> <a name="UserManagedInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.userManagedInput"></a>

```csharp
public SecretManagerSecretReplicationUserManaged UserManagedInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationOutputReference.property.internalValue"></a>

```csharp
public SecretManagerSecretReplication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplication">SecretManagerSecretReplication</a>

---


### SecretManagerSecretReplicationUserManagedOutputReference <a name="SecretManagerSecretReplicationUserManagedOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretReplicationUserManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.putReplicas">PutReplicas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReplicas` <a name="PutReplicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.putReplicas"></a>

```csharp
private void PutReplicas(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.putReplicas.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.replicas">Replicas</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList">SecretManagerSecretReplicationUserManagedReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.replicasInput">ReplicasInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.replicas"></a>

```csharp
public SecretManagerSecretReplicationUserManagedReplicasList Replicas { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList">SecretManagerSecretReplicationUserManagedReplicasList</a>

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.replicasInput"></a>

```csharp
public object ReplicasInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedOutputReference.property.internalValue"></a>

```csharp
public SecretManagerSecretReplicationUserManaged InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManaged">SecretManagerSecretReplicationUserManaged</a>

---


### SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference <a name="SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```csharp
public SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

---


### SecretManagerSecretReplicationUserManagedReplicasList <a name="SecretManagerSecretReplicationUserManagedReplicasList" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretReplicationUserManagedReplicasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.get"></a>

```csharp
private SecretManagerSecretReplicationUserManagedReplicasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecretManagerSecretReplicationUserManagedReplicasOutputReference <a name="SecretManagerSecretReplicationUserManagedReplicasOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretReplicationUserManagedReplicasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.putCustomerManagedEncryption">PutCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resetCustomerManagedEncryption">ResetCustomerManagedEncryption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerManagedEncryption` <a name="PutCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.putCustomerManagedEncryption"></a>

```csharp
private void PutCustomerManagedEncryption(SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.putCustomerManagedEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

---

##### `ResetCustomerManagedEncryption` <a name="ResetCustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.resetCustomerManagedEncryption"></a>

```csharp
private void ResetCustomerManagedEncryption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryptionInput">CustomerManagedEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerManagedEncryption`<sup>Required</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryption"></a>

```csharp
public SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference CustomerManagedEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryptionOutputReference</a>

---

##### `CustomerManagedEncryptionInput`<sup>Optional</sup> <a name="CustomerManagedEncryptionInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.customerManagedEncryptionInput"></a>

```csharp
public SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption CustomerManagedEncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption">SecretManagerSecretReplicationUserManagedReplicasCustomerManagedEncryption</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretReplicationUserManagedReplicasOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecretManagerSecretRotationOutputReference <a name="SecretManagerSecretRotationOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretRotationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resetNextRotationTime">ResetNextRotationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNextRotationTime` <a name="ResetNextRotationTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resetNextRotationTime"></a>

```csharp
private void ResetNextRotationTime()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.resetRotationPeriod"></a>

```csharp
private void ResetRotationPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.nextRotationTimeInput">NextRotationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.nextRotationTime">NextRotationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NextRotationTimeInput`<sup>Optional</sup> <a name="NextRotationTimeInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.nextRotationTimeInput"></a>

```csharp
public string NextRotationTimeInput { get; }
```

- *Type:* string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.rotationPeriodInput"></a>

```csharp
public string RotationPeriodInput { get; }
```

- *Type:* string

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.nextRotationTime"></a>

```csharp
public string NextRotationTime { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotationOutputReference.property.internalValue"></a>

```csharp
public SecretManagerSecretRotation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretRotation">SecretManagerSecretRotation</a>

---


### SecretManagerSecretTimeoutsOutputReference <a name="SecretManagerSecretTimeoutsOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecretManagerSecretTopicsList <a name="SecretManagerSecretTopicsList" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretTopicsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.get"></a>

```csharp
private SecretManagerSecretTopicsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecretManagerSecretTopicsOutputReference <a name="SecretManagerSecretTopicsOutputReference" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerSecretTopicsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerSecret.SecretManagerSecretTopicsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



