# `firebaseAppCheckRecaptchaEnterpriseConfig` Submodule <a name="`firebaseAppCheckRecaptchaEnterpriseConfig` Submodule" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppCheckRecaptchaEnterpriseConfig <a name="FirebaseAppCheckRecaptchaEnterpriseConfig" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firebase_app_check_recaptcha_enterprise_config google_firebase_app_check_recaptcha_enterprise_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppCheckRecaptchaEnterpriseConfig(Construct Scope, string Id, FirebaseAppCheckRecaptchaEnterpriseConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig">FirebaseAppCheckRecaptchaEnterpriseConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig">FirebaseAppCheckRecaptchaEnterpriseConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts">FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.resetTokenTtl"></a>

```csharp
private void ResetTokenTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FirebaseAppCheckRecaptchaEnterpriseConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirebaseAppCheckRecaptchaEnterpriseConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirebaseAppCheckRecaptchaEnterpriseConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirebaseAppCheckRecaptchaEnterpriseConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirebaseAppCheckRecaptchaEnterpriseConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FirebaseAppCheckRecaptchaEnterpriseConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirebaseAppCheckRecaptchaEnterpriseConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirebaseAppCheckRecaptchaEnterpriseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firebase_app_check_recaptcha_enterprise_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppCheckRecaptchaEnterpriseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference">FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.siteKeyInput">SiteKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.tokenTtlInput">TokenTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.siteKey">SiteKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.tokenTtl">TokenTtl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.timeouts"></a>

```csharp
public FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference">FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SiteKeyInput`<sup>Optional</sup> <a name="SiteKeyInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.siteKeyInput"></a>

```csharp
public string SiteKeyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.tokenTtlInput"></a>

```csharp
public string TokenTtlInput { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SiteKey`<sup>Required</sup> <a name="SiteKey" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.siteKey"></a>

```csharp
public string SiteKey { get; }
```

- *Type:* string

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.tokenTtl"></a>

```csharp
public string TokenTtl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppCheckRecaptchaEnterpriseConfigConfig <a name="FirebaseAppCheckRecaptchaEnterpriseConfigConfig" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppCheckRecaptchaEnterpriseConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppId,
    string SiteKey,
    string Id = null,
    string Project = null,
    FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts Timeouts = null,
    string TokenTtl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.appId">AppId</a></code> | <code>string</code> | The ID of an [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.siteKey">SiteKey</a></code> | <code>string</code> | The score-based site key created in reCAPTCHA Enterprise used to invoke reCAPTCHA and generate the reCAPTCHA tokens for your application. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firebase_app_check_recaptcha_enterprise_config#id FirebaseAppCheckRecaptchaEnterpriseConfig#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firebase_app_check_recaptcha_enterprise_config#project FirebaseAppCheckRecaptchaEnterpriseConfig#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts">FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.tokenTtl">TokenTtl</a></code> | <code>string</code> | Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise artifacts will be valid. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

The ID of an [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firebase_app_check_recaptcha_enterprise_config#app_id FirebaseAppCheckRecaptchaEnterpriseConfig#app_id}

---

##### `SiteKey`<sup>Required</sup> <a name="SiteKey" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.siteKey"></a>

```csharp
public string SiteKey { get; set; }
```

- *Type:* string

The score-based site key created in reCAPTCHA Enterprise used to invoke reCAPTCHA and generate the reCAPTCHA tokens for your application.

**Important**: This is not the siteSecret (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firebase_app_check_recaptcha_enterprise_config#site_key FirebaseAppCheckRecaptchaEnterpriseConfig#site_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firebase_app_check_recaptcha_enterprise_config#id FirebaseAppCheckRecaptchaEnterpriseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firebase_app_check_recaptcha_enterprise_config#project FirebaseAppCheckRecaptchaEnterpriseConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.timeouts"></a>

```csharp
public FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts">FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firebase_app_check_recaptcha_enterprise_config#timeouts FirebaseAppCheckRecaptchaEnterpriseConfig#timeouts}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.tokenTtl"></a>

```csharp
public string TokenTtl { get; set; }
```

- *Type:* string

Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firebase_app_check_recaptcha_enterprise_config#token_ttl FirebaseAppCheckRecaptchaEnterpriseConfig#token_ttl}

---

### FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts <a name="FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firebase_app_check_recaptcha_enterprise_config#create FirebaseAppCheckRecaptchaEnterpriseConfig#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firebase_app_check_recaptcha_enterprise_config#delete FirebaseAppCheckRecaptchaEnterpriseConfig#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firebase_app_check_recaptcha_enterprise_config#update FirebaseAppCheckRecaptchaEnterpriseConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firebase_app_check_recaptcha_enterprise_config#create FirebaseAppCheckRecaptchaEnterpriseConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firebase_app_check_recaptcha_enterprise_config#delete FirebaseAppCheckRecaptchaEnterpriseConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/firebase_app_check_recaptcha_enterprise_config#update FirebaseAppCheckRecaptchaEnterpriseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference <a name="FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppCheckRecaptchaEnterpriseConfig.FirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



