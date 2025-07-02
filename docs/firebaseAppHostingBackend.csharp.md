# `firebaseAppHostingBackend` Submodule <a name="`firebaseAppHostingBackend` Submodule" id="@cdktf/provider-google.firebaseAppHostingBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppHostingBackend <a name="FirebaseAppHostingBackend" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend google_firebase_app_hosting_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingBackend(Construct Scope, string Id, FirebaseAppHostingBackendConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig">FirebaseAppHostingBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig">FirebaseAppHostingBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putCodebase">PutCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetCodebase">ResetCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCodebase` <a name="PutCodebase" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putCodebase"></a>

```csharp
private void PutCodebase(FirebaseAppHostingBackendCodebase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putCodebase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putTimeouts"></a>

```csharp
private void PutTimeouts(FirebaseAppHostingBackendTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts">FirebaseAppHostingBackendTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetCodebase` <a name="ResetCodebase" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetCodebase"></a>

```csharp
private void ResetCodebase()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FirebaseAppHostingBackend resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirebaseAppHostingBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirebaseAppHostingBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirebaseAppHostingBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirebaseAppHostingBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FirebaseAppHostingBackend resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirebaseAppHostingBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirebaseAppHostingBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppHostingBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.codebase">Codebase</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference">FirebaseAppHostingBackendCodebaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.managedResources">ManagedResources</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList">FirebaseAppHostingBackendManagedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference">FirebaseAppHostingBackendTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.backendIdInput">BackendIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.codebaseInput">CodebaseInput</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.servingLocalityInput">ServingLocalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.backendId">BackendId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.servingLocality">ServingLocality</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Codebase`<sup>Required</sup> <a name="Codebase" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.codebase"></a>

```csharp
public FirebaseAppHostingBackendCodebaseOutputReference Codebase { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference">FirebaseAppHostingBackendCodebaseOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ManagedResources`<sup>Required</sup> <a name="ManagedResources" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.managedResources"></a>

```csharp
public FirebaseAppHostingBackendManagedResourcesList ManagedResources { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList">FirebaseAppHostingBackendManagedResourcesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.timeouts"></a>

```csharp
public FirebaseAppHostingBackendTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference">FirebaseAppHostingBackendTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `BackendIdInput`<sup>Optional</sup> <a name="BackendIdInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.backendIdInput"></a>

```csharp
public string BackendIdInput { get; }
```

- *Type:* string

---

##### `CodebaseInput`<sup>Optional</sup> <a name="CodebaseInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.codebaseInput"></a>

```csharp
public FirebaseAppHostingBackendCodebase CodebaseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `ServingLocalityInput`<sup>Optional</sup> <a name="ServingLocalityInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.servingLocalityInput"></a>

```csharp
public string ServingLocalityInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `BackendId`<sup>Required</sup> <a name="BackendId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.backendId"></a>

```csharp
public string BackendId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `ServingLocality`<sup>Required</sup> <a name="ServingLocality" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.servingLocality"></a>

```csharp
public string ServingLocality { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppHostingBackendCodebase <a name="FirebaseAppHostingBackendCodebase" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingBackendCodebase {
    string Repository,
    string RootDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase.property.repository">Repository</a></code> | <code>string</code> | The resource name for the Developer Connect ['gitRepositoryLink'](https://cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.connections.gitRepositoryLinks) connected to this backend, in the format:. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase.property.rootDirectory">RootDirectory</a></code> | <code>string</code> | If 'repository' is provided, the directory relative to the root of the repository to use as the root for the deployed web app. |

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The resource name for the Developer Connect ['gitRepositoryLink'](https://cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.connections.gitRepositoryLinks) connected to this backend, in the format:.

projects/{project}/locations/{location}/connections/{connection}/gitRepositoryLinks/{repositoryLink}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#repository FirebaseAppHostingBackend#repository}

---

##### `RootDirectory`<sup>Optional</sup> <a name="RootDirectory" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase.property.rootDirectory"></a>

```csharp
public string RootDirectory { get; set; }
```

- *Type:* string

If 'repository' is provided, the directory relative to the root of the repository to use as the root for the deployed web app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#root_directory FirebaseAppHostingBackend#root_directory}

---

### FirebaseAppHostingBackendConfig <a name="FirebaseAppHostingBackendConfig" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingBackendConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppId,
    string BackendId,
    string Location,
    string ServiceAccount,
    string ServingLocality,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    FirebaseAppHostingBackendCodebase Codebase = null,
    string DisplayName = null,
    string Environment = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    FirebaseAppHostingBackendTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.appId">AppId</a></code> | <code>string</code> | The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the backend. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.backendId">BackendId</a></code> | <code>string</code> | Id of the backend. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.location">Location</a></code> | <code>string</code> | The canonical IDs of a Google Cloud location such as "us-east1". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The name of the service account used for Cloud Build and Cloud Run. Should have the role roles/firebaseapphosting.computeRunner or equivalent permissions. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.servingLocality">ServingLocality</a></code> | <code>string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.codebase">Codebase</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a></code> | codebase block. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable name. 63 character limit. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.environment">Environment</a></code> | <code>string</code> | The environment name of the backend, used to load environment variables from environment specific configuration. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#id FirebaseAppHostingBackend#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#project FirebaseAppHostingBackend#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts">FirebaseAppHostingBackendTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#app_id FirebaseAppHostingBackend#app_id}

---

##### `BackendId`<sup>Required</sup> <a name="BackendId" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.backendId"></a>

```csharp
public string BackendId { get; set; }
```

- *Type:* string

Id of the backend.

Also used as the service ID for Cloud Run, and as part
of the default domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#backend_id FirebaseAppHostingBackend#backend_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The canonical IDs of a Google Cloud location such as "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#location FirebaseAppHostingBackend#location}

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The name of the service account used for Cloud Build and Cloud Run. Should have the role roles/firebaseapphosting.computeRunner or equivalent permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#service_account FirebaseAppHostingBackend#service_account}

---

##### `ServingLocality`<sup>Required</sup> <a name="ServingLocality" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.servingLocality"></a>

```csharp
public string ServingLocality { get; set; }
```

- *Type:* string

Immutable.

Specifies how App Hosting will serve the content for this backend. It will
either be contained to a single region (REGIONAL_STRICT) or allowed to use
App Hosting's global-replicated serving infrastructure (GLOBAL_ACCESS). Possible values: ["REGIONAL_STRICT", "GLOBAL_ACCESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#serving_locality FirebaseAppHostingBackend#serving_locality}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#annotations FirebaseAppHostingBackend#annotations}

---

##### `Codebase`<sup>Optional</sup> <a name="Codebase" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.codebase"></a>

```csharp
public FirebaseAppHostingBackendCodebase Codebase { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a>

codebase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#codebase FirebaseAppHostingBackend#codebase}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#display_name FirebaseAppHostingBackend#display_name}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The environment name of the backend, used to load environment variables from environment specific configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#environment FirebaseAppHostingBackend#environment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#id FirebaseAppHostingBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Unstructured key value map that can be used to organize and categorize objects.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#labels FirebaseAppHostingBackend#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#project FirebaseAppHostingBackend#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendConfig.property.timeouts"></a>

```csharp
public FirebaseAppHostingBackendTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts">FirebaseAppHostingBackendTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#timeouts FirebaseAppHostingBackend#timeouts}

---

### FirebaseAppHostingBackendManagedResources <a name="FirebaseAppHostingBackendManagedResources" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingBackendManagedResources {

};
```


### FirebaseAppHostingBackendManagedResourcesRunService <a name="FirebaseAppHostingBackendManagedResourcesRunService" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingBackendManagedResourcesRunService {

};
```


### FirebaseAppHostingBackendTimeouts <a name="FirebaseAppHostingBackendTimeouts" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingBackendTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#create FirebaseAppHostingBackend#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#delete FirebaseAppHostingBackend#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#update FirebaseAppHostingBackend#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#create FirebaseAppHostingBackend#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#delete FirebaseAppHostingBackend#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/firebase_app_hosting_backend#update FirebaseAppHostingBackend#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppHostingBackendCodebaseOutputReference <a name="FirebaseAppHostingBackendCodebaseOutputReference" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingBackendCodebaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.resetRootDirectory">ResetRootDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRootDirectory` <a name="ResetRootDirectory" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.resetRootDirectory"></a>

```csharp
private void ResetRootDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.rootDirectoryInput">RootDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.rootDirectory">RootDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `RootDirectoryInput`<sup>Optional</sup> <a name="RootDirectoryInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.rootDirectoryInput"></a>

```csharp
public string RootDirectoryInput { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `RootDirectory`<sup>Required</sup> <a name="RootDirectory" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.rootDirectory"></a>

```csharp
public string RootDirectory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebaseOutputReference.property.internalValue"></a>

```csharp
public FirebaseAppHostingBackendCodebase InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendCodebase">FirebaseAppHostingBackendCodebase</a>

---


### FirebaseAppHostingBackendManagedResourcesList <a name="FirebaseAppHostingBackendManagedResourcesList" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingBackendManagedResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.get"></a>

```csharp
private FirebaseAppHostingBackendManagedResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FirebaseAppHostingBackendManagedResourcesOutputReference <a name="FirebaseAppHostingBackendManagedResourcesOutputReference" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingBackendManagedResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.runService">RunService</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList">FirebaseAppHostingBackendManagedResourcesRunServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResources">FirebaseAppHostingBackendManagedResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RunService`<sup>Required</sup> <a name="RunService" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.runService"></a>

```csharp
public FirebaseAppHostingBackendManagedResourcesRunServiceList RunService { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList">FirebaseAppHostingBackendManagedResourcesRunServiceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesOutputReference.property.internalValue"></a>

```csharp
public FirebaseAppHostingBackendManagedResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResources">FirebaseAppHostingBackendManagedResources</a>

---


### FirebaseAppHostingBackendManagedResourcesRunServiceList <a name="FirebaseAppHostingBackendManagedResourcesRunServiceList" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingBackendManagedResourcesRunServiceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.get"></a>

```csharp
private FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference <a name="FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunService">FirebaseAppHostingBackendManagedResourcesRunService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunServiceOutputReference.property.internalValue"></a>

```csharp
public FirebaseAppHostingBackendManagedResourcesRunService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendManagedResourcesRunService">FirebaseAppHostingBackendManagedResourcesRunService</a>

---


### FirebaseAppHostingBackendTimeoutsOutputReference <a name="FirebaseAppHostingBackendTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirebaseAppHostingBackendTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firebaseAppHostingBackend.FirebaseAppHostingBackendTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



