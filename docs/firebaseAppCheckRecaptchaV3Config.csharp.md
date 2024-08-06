# `firebaseAppCheckRecaptchaV3Config` Submodule <a name="`firebaseAppCheckRecaptchaV3Config` Submodule" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppCheckRecaptchaV3Config <a name="FirebaseAppCheckRecaptchaV3Config" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/firebase_app_check_recaptcha_v3_config google_firebase_app_check_recaptcha_v3_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppCheckRecaptchaV3Config(Construct Scope, string Id, FirebaseAppCheckRecaptchaV3ConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig">FirebaseAppCheckRecaptchaV3ConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig">FirebaseAppCheckRecaptchaV3ConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.putTimeouts"></a>

```csharp
private void PutTimeouts(FirebaseAppCheckRecaptchaV3ConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.resetTokenTtl"></a>

```csharp
private void ResetTokenTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FirebaseAppCheckRecaptchaV3Config resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirebaseAppCheckRecaptchaV3Config.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirebaseAppCheckRecaptchaV3Config.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirebaseAppCheckRecaptchaV3Config.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirebaseAppCheckRecaptchaV3Config.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FirebaseAppCheckRecaptchaV3Config resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirebaseAppCheckRecaptchaV3Config to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirebaseAppCheckRecaptchaV3Config that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/firebase_app_check_recaptcha_v3_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppCheckRecaptchaV3Config to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecretSet">SiteSecretSet</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference">FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecretInput">SiteSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tokenTtlInput">TokenTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecret">SiteSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tokenTtl">TokenTtl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SiteSecretSet`<sup>Required</sup> <a name="SiteSecretSet" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecretSet"></a>

```csharp
public IResolvable SiteSecretSet { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.timeouts"></a>

```csharp
public FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference">FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SiteSecretInput`<sup>Optional</sup> <a name="SiteSecretInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecretInput"></a>

```csharp
public string SiteSecretInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tokenTtlInput"></a>

```csharp
public string TokenTtlInput { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SiteSecret`<sup>Required</sup> <a name="SiteSecret" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.siteSecret"></a>

```csharp
public string SiteSecret { get; }
```

- *Type:* string

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tokenTtl"></a>

```csharp
public string TokenTtl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3Config.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppCheckRecaptchaV3ConfigConfig <a name="FirebaseAppCheckRecaptchaV3ConfigConfig" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppCheckRecaptchaV3ConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppId,
    string SiteSecret,
    string Id = null,
    string Project = null,
    FirebaseAppCheckRecaptchaV3ConfigTimeouts Timeouts = null,
    string TokenTtl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.appId">AppId</a></code> | <code>string</code> | The ID of an [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.siteSecret">SiteSecret</a></code> | <code>string</code> | The site secret used to identify your service for reCAPTCHA v3 verification. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/firebase_app_check_recaptcha_v3_config#id FirebaseAppCheckRecaptchaV3Config#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/firebase_app_check_recaptcha_v3_config#project FirebaseAppCheckRecaptchaV3Config#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.tokenTtl">TokenTtl</a></code> | <code>string</code> | Specifies the duration for which App Check tokens exchanged from reCAPTCHA V3 artifacts will be valid. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

The ID of an [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/firebase_app_check_recaptcha_v3_config#app_id FirebaseAppCheckRecaptchaV3Config#app_id}

---

##### `SiteSecret`<sup>Required</sup> <a name="SiteSecret" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.siteSecret"></a>

```csharp
public string SiteSecret { get; set; }
```

- *Type:* string

The site secret used to identify your service for reCAPTCHA v3 verification.

For security reasons, this field will never be populated in any response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/firebase_app_check_recaptcha_v3_config#site_secret FirebaseAppCheckRecaptchaV3Config#site_secret}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/firebase_app_check_recaptcha_v3_config#id FirebaseAppCheckRecaptchaV3Config#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/firebase_app_check_recaptcha_v3_config#project FirebaseAppCheckRecaptchaV3Config#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.timeouts"></a>

```csharp
public FirebaseAppCheckRecaptchaV3ConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts">FirebaseAppCheckRecaptchaV3ConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/firebase_app_check_recaptcha_v3_config#timeouts FirebaseAppCheckRecaptchaV3Config#timeouts}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigConfig.property.tokenTtl"></a>

```csharp
public string TokenTtl { get; set; }
```

- *Type:* string

Specifies the duration for which App Check tokens exchanged from reCAPTCHA V3 artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/firebase_app_check_recaptcha_v3_config#token_ttl FirebaseAppCheckRecaptchaV3Config#token_ttl}

---

### FirebaseAppCheckRecaptchaV3ConfigTimeouts <a name="FirebaseAppCheckRecaptchaV3ConfigTimeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppCheckRecaptchaV3ConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/firebase_app_check_recaptcha_v3_config#create FirebaseAppCheckRecaptchaV3Config#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/firebase_app_check_recaptcha_v3_config#delete FirebaseAppCheckRecaptchaV3Config#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/firebase_app_check_recaptcha_v3_config#update FirebaseAppCheckRecaptchaV3Config#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/firebase_app_check_recaptcha_v3_config#create FirebaseAppCheckRecaptchaV3Config#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/firebase_app_check_recaptcha_v3_config#delete FirebaseAppCheckRecaptchaV3Config#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/firebase_app_check_recaptcha_v3_config#update FirebaseAppCheckRecaptchaV3Config#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference <a name="FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppCheckRecaptchaV3Config.FirebaseAppCheckRecaptchaV3ConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



