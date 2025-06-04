# `secretManagerRegionalSecretIamBinding` Submodule <a name="`secretManagerRegionalSecretIamBinding` Submodule" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerRegionalSecretIamBinding <a name="SecretManagerRegionalSecretIamBinding" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding google_secret_manager_regional_secret_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerRegionalSecretIamBinding(Construct Scope, string Id, SecretManagerRegionalSecretIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig">SecretManagerRegionalSecretIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig">SecretManagerRegionalSecretIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.putCondition"></a>

```csharp
private void PutCondition(SecretManagerRegionalSecretIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingCondition">SecretManagerRegionalSecretIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecretManagerRegionalSecretIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecretManagerRegionalSecretIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecretManagerRegionalSecretIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecretManagerRegionalSecretIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecretManagerRegionalSecretIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecretManagerRegionalSecretIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretManagerRegionalSecretIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretManagerRegionalSecretIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecretManagerRegionalSecretIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference">SecretManagerRegionalSecretIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingCondition">SecretManagerRegionalSecretIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.condition"></a>

```csharp
public SecretManagerRegionalSecretIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference">SecretManagerRegionalSecretIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.conditionInput"></a>

```csharp
public SecretManagerRegionalSecretIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingCondition">SecretManagerRegionalSecretIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerRegionalSecretIamBindingCondition <a name="SecretManagerRegionalSecretIamBindingCondition" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerRegionalSecretIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#expression SecretManagerRegionalSecretIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#title SecretManagerRegionalSecretIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#description SecretManagerRegionalSecretIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#expression SecretManagerRegionalSecretIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#title SecretManagerRegionalSecretIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#description SecretManagerRegionalSecretIamBinding#description}.

---

### SecretManagerRegionalSecretIamBindingConfig <a name="SecretManagerRegionalSecretIamBindingConfig" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerRegionalSecretIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Members,
    string Role,
    string SecretId,
    SecretManagerRegionalSecretIamBindingCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#members SecretManagerRegionalSecretIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#role SecretManagerRegionalSecretIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#secret_id SecretManagerRegionalSecretIamBinding#secret_id}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingCondition">SecretManagerRegionalSecretIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#id SecretManagerRegionalSecretIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#location SecretManagerRegionalSecretIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#project SecretManagerRegionalSecretIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#members SecretManagerRegionalSecretIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#role SecretManagerRegionalSecretIamBinding#role}.

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#secret_id SecretManagerRegionalSecretIamBinding#secret_id}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.condition"></a>

```csharp
public SecretManagerRegionalSecretIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingCondition">SecretManagerRegionalSecretIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#condition SecretManagerRegionalSecretIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#id SecretManagerRegionalSecretIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#location SecretManagerRegionalSecretIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secret_manager_regional_secret_iam_binding#project SecretManagerRegionalSecretIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerRegionalSecretIamBindingConditionOutputReference <a name="SecretManagerRegionalSecretIamBindingConditionOutputReference" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecretManagerRegionalSecretIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingCondition">SecretManagerRegionalSecretIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public SecretManagerRegionalSecretIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secretManagerRegionalSecretIamBinding.SecretManagerRegionalSecretIamBindingCondition">SecretManagerRegionalSecretIamBindingCondition</a>

---



