# `accessContextManagerGcpUserAccessBinding` Submodule <a name="`accessContextManagerGcpUserAccessBinding` Submodule" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerGcpUserAccessBinding <a name="AccessContextManagerGcpUserAccessBinding" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding google_access_context_manager_gcp_user_access_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBinding(Construct Scope, string Id, AccessContextManagerGcpUserAccessBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig">AccessContextManagerGcpUserAccessBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig">AccessContextManagerGcpUserAccessBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putScopedAccessSettings">PutScopedAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putSessionSettings">PutSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetAccessLevels">ResetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetScopedAccessSettings">ResetScopedAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetSessionSettings">ResetSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScopedAccessSettings` <a name="PutScopedAccessSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putScopedAccessSettings"></a>

```csharp
private void PutScopedAccessSettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putScopedAccessSettings.parameter.value"></a>

- *Type:* object

---

##### `PutSessionSettings` <a name="PutSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putSessionSettings"></a>

```csharp
private void PutSessionSettings(AccessContextManagerGcpUserAccessBindingSessionSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putSessionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(AccessContextManagerGcpUserAccessBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a>

---

##### `ResetAccessLevels` <a name="ResetAccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetAccessLevels"></a>

```csharp
private void ResetAccessLevels()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetScopedAccessSettings` <a name="ResetScopedAccessSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetScopedAccessSettings"></a>

```csharp
private void ResetScopedAccessSettings()
```

##### `ResetSessionSettings` <a name="ResetSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetSessionSettings"></a>

```csharp
private void ResetSessionSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccessContextManagerGcpUserAccessBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerGcpUserAccessBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerGcpUserAccessBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerGcpUserAccessBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerGcpUserAccessBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AccessContextManagerGcpUserAccessBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessContextManagerGcpUserAccessBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessContextManagerGcpUserAccessBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AccessContextManagerGcpUserAccessBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.scopedAccessSettings">ScopedAccessSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.sessionSettings">SessionSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference">AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference">AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.accessLevelsInput">AccessLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.groupKeyInput">GroupKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.organizationIdInput">OrganizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.scopedAccessSettingsInput">ScopedAccessSettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.sessionSettingsInput">SessionSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.accessLevels">AccessLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.groupKey">GroupKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScopedAccessSettings`<sup>Required</sup> <a name="ScopedAccessSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.scopedAccessSettings"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList ScopedAccessSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList</a>

---

##### `SessionSettings`<sup>Required</sup> <a name="SessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.sessionSettings"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference SessionSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference">AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.timeouts"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference">AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference</a>

---

##### `AccessLevelsInput`<sup>Optional</sup> <a name="AccessLevelsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.accessLevelsInput"></a>

```csharp
public string[] AccessLevelsInput { get; }
```

- *Type:* string[]

---

##### `GroupKeyInput`<sup>Optional</sup> <a name="GroupKeyInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.groupKeyInput"></a>

```csharp
public string GroupKeyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.organizationIdInput"></a>

```csharp
public string OrganizationIdInput { get; }
```

- *Type:* string

---

##### `ScopedAccessSettingsInput`<sup>Optional</sup> <a name="ScopedAccessSettingsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.scopedAccessSettingsInput"></a>

```csharp
public object ScopedAccessSettingsInput { get; }
```

- *Type:* object

---

##### `SessionSettingsInput`<sup>Optional</sup> <a name="SessionSettingsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.sessionSettingsInput"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingSessionSettings SessionSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccessLevels`<sup>Required</sup> <a name="AccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.accessLevels"></a>

```csharp
public string[] AccessLevels { get; }
```

- *Type:* string[]

---

##### `GroupKey`<sup>Required</sup> <a name="GroupKey" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.groupKey"></a>

```csharp
public string GroupKey { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerGcpUserAccessBindingConfig <a name="AccessContextManagerGcpUserAccessBindingConfig" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GroupKey,
    string OrganizationId,
    string[] AccessLevels = null,
    string Id = null,
    object ScopedAccessSettings = null,
    AccessContextManagerGcpUserAccessBindingSessionSettings SessionSettings = null,
    AccessContextManagerGcpUserAccessBindingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.groupKey">GroupKey</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.organizationId">OrganizationId</a></code> | <code>string</code> | Required. ID of the parent organization. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.accessLevels">AccessLevels</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#id AccessContextManagerGcpUserAccessBinding#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.scopedAccessSettings">ScopedAccessSettings</a></code> | <code>object</code> | scoped_access_settings block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.sessionSettings">SessionSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a></code> | session_settings block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GroupKey`<sup>Required</sup> <a name="GroupKey" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.groupKey"></a>

```csharp
public string GroupKey { get; set; }
```

- *Type:* string

Required.

Immutable. Google Group id whose members are subject to this binding's restrictions. See "id" in the G Suite Directory API's Groups resource. If a group's email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#group_key AccessContextManagerGcpUserAccessBinding#group_key}

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.organizationId"></a>

```csharp
public string OrganizationId { get; set; }
```

- *Type:* string

Required. ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#organization_id AccessContextManagerGcpUserAccessBinding#organization_id}

---

##### `AccessLevels`<sup>Optional</sup> <a name="AccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.accessLevels"></a>

```csharp
public string[] AccessLevels { get; set; }
```

- *Type:* string[]

Optional.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#access_levels AccessContextManagerGcpUserAccessBinding#access_levels}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#id AccessContextManagerGcpUserAccessBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScopedAccessSettings`<sup>Optional</sup> <a name="ScopedAccessSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.scopedAccessSettings"></a>

```csharp
public object ScopedAccessSettings { get; set; }
```

- *Type:* object

scoped_access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#scoped_access_settings AccessContextManagerGcpUserAccessBinding#scoped_access_settings}

---

##### `SessionSettings`<sup>Optional</sup> <a name="SessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.sessionSettings"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingSessionSettings SessionSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a>

session_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#session_settings AccessContextManagerGcpUserAccessBinding#session_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.timeouts"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#timeouts AccessContextManagerGcpUserAccessBinding#timeouts}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettings <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettings {
    AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings ActiveSettings = null,
    AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings DryRunSettings = null,
    AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.activeSettings">ActiveSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a></code> | active_settings block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.dryRunSettings">DryRunSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a></code> | dry_run_settings block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a></code> | scope block. |

---

##### `ActiveSettings`<sup>Optional</sup> <a name="ActiveSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.activeSettings"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings ActiveSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

active_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#active_settings AccessContextManagerGcpUserAccessBinding#active_settings}

---

##### `DryRunSettings`<sup>Optional</sup> <a name="DryRunSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.dryRunSettings"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings DryRunSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

dry_run_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#dry_run_settings AccessContextManagerGcpUserAccessBinding#dry_run_settings}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.scope"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope Scope { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#scope AccessContextManagerGcpUserAccessBinding#scope}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings {
    string[] AccessLevels = null,
    AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings SessionSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.accessLevels">AccessLevels</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.sessionSettings">SessionSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a></code> | session_settings block. |

---

##### `AccessLevels`<sup>Optional</sup> <a name="AccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.accessLevels"></a>

```csharp
public string[] AccessLevels { get; set; }
```

- *Type:* string[]

Optional.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#access_levels AccessContextManagerGcpUserAccessBinding#access_levels}

---

##### `SessionSettings`<sup>Optional</sup> <a name="SessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.sessionSettings"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings SessionSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

session_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#session_settings AccessContextManagerGcpUserAccessBinding#session_settings}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings {
    string MaxInactivity = null,
    string SessionLength = null,
    object SessionLengthEnabled = null,
    string SessionReauthMethod = null,
    object UseOidcMaxAge = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.maxInactivity">MaxInactivity</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLength">SessionLength</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLengthEnabled">SessionLengthEnabled</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionReauthMethod">SessionReauthMethod</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.useOidcMaxAge">UseOidcMaxAge</a></code> | <code>object</code> | Optional. |

---

##### `MaxInactivity`<sup>Optional</sup> <a name="MaxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.maxInactivity"></a>

```csharp
public string MaxInactivity { get; set; }
```

- *Type:* string

Optional.

How long a user is allowed to take between actions before a new access token must be issued. Only set for Google Cloud apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#max_inactivity AccessContextManagerGcpUserAccessBinding#max_inactivity}

---

##### `SessionLength`<sup>Optional</sup> <a name="SessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLength"></a>

```csharp
public string SessionLength { get; set; }
```

- *Type:* string

Optional.

The session length. Setting this field to zero is equal to disabling session. Also can set infinite session by flipping the enabled bit to false below. If useOidcMaxAge is true, for OIDC apps, the session length will be the minimum of this field and OIDC max_age param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#session_length AccessContextManagerGcpUserAccessBinding#session_length}

---

##### `SessionLengthEnabled`<sup>Optional</sup> <a name="SessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLengthEnabled"></a>

```csharp
public object SessionLengthEnabled { get; set; }
```

- *Type:* object

Optional.

This field enables or disables Google Cloud session length. When false, all fields set above will be disregarded and the session length is basically infinite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#session_length_enabled AccessContextManagerGcpUserAccessBinding#session_length_enabled}

---

##### `SessionReauthMethod`<sup>Optional</sup> <a name="SessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionReauthMethod"></a>

```csharp
public string SessionReauthMethod { get; set; }
```

- *Type:* string

Optional.

The session challenges proposed to users when the Google Cloud session length is up. Possible values: ["LOGIN", "SECURITY_KEY", "PASSWORD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#session_reauth_method AccessContextManagerGcpUserAccessBinding#session_reauth_method}

---

##### `UseOidcMaxAge`<sup>Optional</sup> <a name="UseOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.useOidcMaxAge"></a>

```csharp
public object UseOidcMaxAge { get; set; }
```

- *Type:* object

Optional.

Only useful for OIDC apps. When false, the OIDC max_age param, if passed in the authentication request will be ignored. When true, the re-auth period will be the minimum of the sessionLength field and the max_age OIDC param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#use_oidc_max_age AccessContextManagerGcpUserAccessBinding#use_oidc_max_age}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings {
    string[] AccessLevels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings.property.accessLevels">AccessLevels</a></code> | <code>string[]</code> | Optional. |

---

##### `AccessLevels`<sup>Optional</sup> <a name="AccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings.property.accessLevels"></a>

```csharp
public string[] AccessLevels { get; set; }
```

- *Type:* string[]

Optional.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#access_levels AccessContextManagerGcpUserAccessBinding#access_levels}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope {
    AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope ClientScope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope.property.clientScope">ClientScope</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a></code> | client_scope block. |

---

##### `ClientScope`<sup>Optional</sup> <a name="ClientScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope.property.clientScope"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope ClientScope { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

client_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#client_scope AccessContextManagerGcpUserAccessBinding#client_scope}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope {
    AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication RestrictedClientApplication = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope.property.restrictedClientApplication">RestrictedClientApplication</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a></code> | restricted_client_application block. |

---

##### `RestrictedClientApplication`<sup>Optional</sup> <a name="RestrictedClientApplication" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope.property.restrictedClientApplication"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication RestrictedClientApplication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

restricted_client_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#restricted_client_application AccessContextManagerGcpUserAccessBinding#restricted_client_application}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication {
    string ClientId = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.property.clientId">ClientId</a></code> | <code>string</code> | The OAuth client ID of the application. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.property.name">Name</a></code> | <code>string</code> | The name of the application. Example: "Cloud Console". |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The OAuth client ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#client_id AccessContextManagerGcpUserAccessBinding#client_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the application. Example: "Cloud Console".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#name AccessContextManagerGcpUserAccessBinding#name}

---

### AccessContextManagerGcpUserAccessBindingSessionSettings <a name="AccessContextManagerGcpUserAccessBindingSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingSessionSettings {
    string MaxInactivity = null,
    string SessionLength = null,
    object SessionLengthEnabled = null,
    string SessionReauthMethod = null,
    object UseOidcMaxAge = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.maxInactivity">MaxInactivity</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLength">SessionLength</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLengthEnabled">SessionLengthEnabled</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionReauthMethod">SessionReauthMethod</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.useOidcMaxAge">UseOidcMaxAge</a></code> | <code>object</code> | Optional. |

---

##### `MaxInactivity`<sup>Optional</sup> <a name="MaxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.maxInactivity"></a>

```csharp
public string MaxInactivity { get; set; }
```

- *Type:* string

Optional.

How long a user is allowed to take between actions before a new access token must be issued. Only set for Google Cloud apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#max_inactivity AccessContextManagerGcpUserAccessBinding#max_inactivity}

---

##### `SessionLength`<sup>Optional</sup> <a name="SessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLength"></a>

```csharp
public string SessionLength { get; set; }
```

- *Type:* string

Optional.

The session length. Setting this field to zero is equal to disabling session. Also can set infinite session by flipping the enabled bit to false below. If useOidcMaxAge is true, for OIDC apps, the session length will be the minimum of this field and OIDC max_age param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#session_length AccessContextManagerGcpUserAccessBinding#session_length}

---

##### `SessionLengthEnabled`<sup>Optional</sup> <a name="SessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLengthEnabled"></a>

```csharp
public object SessionLengthEnabled { get; set; }
```

- *Type:* object

Optional.

This field enables or disables Google Cloud session length. When false, all fields set above will be disregarded and the session length is basically infinite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#session_length_enabled AccessContextManagerGcpUserAccessBinding#session_length_enabled}

---

##### `SessionReauthMethod`<sup>Optional</sup> <a name="SessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionReauthMethod"></a>

```csharp
public string SessionReauthMethod { get; set; }
```

- *Type:* string

Optional.

The session challenges proposed to users when the Google Cloud session length is up. Possible values: ["LOGIN", "SECURITY_KEY", "PASSWORD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#session_reauth_method AccessContextManagerGcpUserAccessBinding#session_reauth_method}

---

##### `UseOidcMaxAge`<sup>Optional</sup> <a name="UseOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.useOidcMaxAge"></a>

```csharp
public object UseOidcMaxAge { get; set; }
```

- *Type:* object

Optional.

Only useful for OIDC apps. When false, the OIDC max_age param, if passed in the authentication request will be ignored. When true, the re-auth period will be the minimum of the sessionLength field and the max_age OIDC param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#use_oidc_max_age AccessContextManagerGcpUserAccessBinding#use_oidc_max_age}

---

### AccessContextManagerGcpUserAccessBindingTimeouts <a name="AccessContextManagerGcpUserAccessBindingTimeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#create AccessContextManagerGcpUserAccessBinding#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#delete AccessContextManagerGcpUserAccessBinding#delete}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#update AccessContextManagerGcpUserAccessBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#create AccessContextManagerGcpUserAccessBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#delete AccessContextManagerGcpUserAccessBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/access_context_manager_gcp_user_access_binding#update AccessContextManagerGcpUserAccessBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.putSessionSettings">PutSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetAccessLevels">ResetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetSessionSettings">ResetSessionSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSessionSettings` <a name="PutSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.putSessionSettings"></a>

```csharp
private void PutSessionSettings(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.putSessionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

---

##### `ResetAccessLevels` <a name="ResetAccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetAccessLevels"></a>

```csharp
private void ResetAccessLevels()
```

##### `ResetSessionSettings` <a name="ResetSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetSessionSettings"></a>

```csharp
private void ResetSessionSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettings">SessionSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevelsInput">AccessLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettingsInput">SessionSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevels">AccessLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SessionSettings`<sup>Required</sup> <a name="SessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettings"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference SessionSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference</a>

---

##### `AccessLevelsInput`<sup>Optional</sup> <a name="AccessLevelsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevelsInput"></a>

```csharp
public string[] AccessLevelsInput { get; }
```

- *Type:* string[]

---

##### `SessionSettingsInput`<sup>Optional</sup> <a name="SessionSettingsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettingsInput"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings SessionSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

---

##### `AccessLevels`<sup>Required</sup> <a name="AccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevels"></a>

```csharp
public string[] AccessLevels { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.internalValue"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetMaxInactivity">ResetMaxInactivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLength">ResetSessionLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLengthEnabled">ResetSessionLengthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionReauthMethod">ResetSessionReauthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetUseOidcMaxAge">ResetUseOidcMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInactivity` <a name="ResetMaxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetMaxInactivity"></a>

```csharp
private void ResetMaxInactivity()
```

##### `ResetSessionLength` <a name="ResetSessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLength"></a>

```csharp
private void ResetSessionLength()
```

##### `ResetSessionLengthEnabled` <a name="ResetSessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLengthEnabled"></a>

```csharp
private void ResetSessionLengthEnabled()
```

##### `ResetSessionReauthMethod` <a name="ResetSessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionReauthMethod"></a>

```csharp
private void ResetSessionReauthMethod()
```

##### `ResetUseOidcMaxAge` <a name="ResetUseOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetUseOidcMaxAge"></a>

```csharp
private void ResetUseOidcMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivityInput">MaxInactivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabledInput">SessionLengthEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthInput">SessionLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethodInput">SessionReauthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAgeInput">UseOidcMaxAgeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivity">MaxInactivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLength">SessionLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabled">SessionLengthEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethod">SessionReauthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAge">UseOidcMaxAge</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInactivityInput`<sup>Optional</sup> <a name="MaxInactivityInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivityInput"></a>

```csharp
public string MaxInactivityInput { get; }
```

- *Type:* string

---

##### `SessionLengthEnabledInput`<sup>Optional</sup> <a name="SessionLengthEnabledInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabledInput"></a>

```csharp
public object SessionLengthEnabledInput { get; }
```

- *Type:* object

---

##### `SessionLengthInput`<sup>Optional</sup> <a name="SessionLengthInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthInput"></a>

```csharp
public string SessionLengthInput { get; }
```

- *Type:* string

---

##### `SessionReauthMethodInput`<sup>Optional</sup> <a name="SessionReauthMethodInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethodInput"></a>

```csharp
public string SessionReauthMethodInput { get; }
```

- *Type:* string

---

##### `UseOidcMaxAgeInput`<sup>Optional</sup> <a name="UseOidcMaxAgeInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAgeInput"></a>

```csharp
public object UseOidcMaxAgeInput { get; }
```

- *Type:* object

---

##### `MaxInactivity`<sup>Required</sup> <a name="MaxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivity"></a>

```csharp
public string MaxInactivity { get; }
```

- *Type:* string

---

##### `SessionLength`<sup>Required</sup> <a name="SessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLength"></a>

```csharp
public string SessionLength { get; }
```

- *Type:* string

---

##### `SessionLengthEnabled`<sup>Required</sup> <a name="SessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabled"></a>

```csharp
public object SessionLengthEnabled { get; }
```

- *Type:* object

---

##### `SessionReauthMethod`<sup>Required</sup> <a name="SessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethod"></a>

```csharp
public string SessionReauthMethod { get; }
```

- *Type:* string

---

##### `UseOidcMaxAge`<sup>Required</sup> <a name="UseOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAge"></a>

```csharp
public object UseOidcMaxAge { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.internalValue"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resetAccessLevels">ResetAccessLevels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevels` <a name="ResetAccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resetAccessLevels"></a>

```csharp
private void ResetAccessLevels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevelsInput">AccessLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevels">AccessLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessLevelsInput`<sup>Optional</sup> <a name="AccessLevelsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevelsInput"></a>

```csharp
public string[] AccessLevelsInput { get; }
```

- *Type:* string[]

---

##### `AccessLevels`<sup>Required</sup> <a name="AccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevels"></a>

```csharp
public string[] AccessLevels { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.internalValue"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.get"></a>

```csharp
private AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putActiveSettings">PutActiveSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putDryRunSettings">PutDryRunSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetActiveSettings">ResetActiveSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetDryRunSettings">ResetDryRunSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveSettings` <a name="PutActiveSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putActiveSettings"></a>

```csharp
private void PutActiveSettings(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putActiveSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

---

##### `PutDryRunSettings` <a name="PutDryRunSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putDryRunSettings"></a>

```csharp
private void PutDryRunSettings(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putDryRunSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

---

##### `PutScope` <a name="PutScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putScope"></a>

```csharp
private void PutScope(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

---

##### `ResetActiveSettings` <a name="ResetActiveSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetActiveSettings"></a>

```csharp
private void ResetActiveSettings()
```

##### `ResetDryRunSettings` <a name="ResetDryRunSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetDryRunSettings"></a>

```csharp
private void ResetDryRunSettings()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettings">ActiveSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettings">DryRunSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettingsInput">ActiveSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettingsInput">DryRunSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scopeInput">ScopeInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveSettings`<sup>Required</sup> <a name="ActiveSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettings"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference ActiveSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference</a>

---

##### `DryRunSettings`<sup>Required</sup> <a name="DryRunSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettings"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference DryRunSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scope"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference Scope { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference</a>

---

##### `ActiveSettingsInput`<sup>Optional</sup> <a name="ActiveSettingsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettingsInput"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings ActiveSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

---

##### `DryRunSettingsInput`<sup>Optional</sup> <a name="DryRunSettingsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettingsInput"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings DryRunSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scopeInput"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope ScopeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.putRestrictedClientApplication">PutRestrictedClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resetRestrictedClientApplication">ResetRestrictedClientApplication</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRestrictedClientApplication` <a name="PutRestrictedClientApplication" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.putRestrictedClientApplication"></a>

```csharp
private void PutRestrictedClientApplication(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.putRestrictedClientApplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

---

##### `ResetRestrictedClientApplication` <a name="ResetRestrictedClientApplication" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resetRestrictedClientApplication"></a>

```csharp
private void ResetRestrictedClientApplication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplication">RestrictedClientApplication</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplicationInput">RestrictedClientApplicationInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RestrictedClientApplication`<sup>Required</sup> <a name="RestrictedClientApplication" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplication"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference RestrictedClientApplication { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference</a>

---

##### `RestrictedClientApplicationInput`<sup>Optional</sup> <a name="RestrictedClientApplicationInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplicationInput"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication RestrictedClientApplicationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.internalValue"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.internalValue"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.putClientScope">PutClientScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resetClientScope">ResetClientScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientScope` <a name="PutClientScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.putClientScope"></a>

```csharp
private void PutClientScope(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.putClientScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

---

##### `ResetClientScope` <a name="ResetClientScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resetClientScope"></a>

```csharp
private void ResetClientScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScope">ClientScope</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScopeInput">ClientScopeInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientScope`<sup>Required</sup> <a name="ClientScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScope"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference ClientScope { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference</a>

---

##### `ClientScopeInput`<sup>Optional</sup> <a name="ClientScopeInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScopeInput"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope ClientScopeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.internalValue"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

---


### AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference <a name="AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetMaxInactivity">ResetMaxInactivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLength">ResetSessionLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLengthEnabled">ResetSessionLengthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionReauthMethod">ResetSessionReauthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetUseOidcMaxAge">ResetUseOidcMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInactivity` <a name="ResetMaxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetMaxInactivity"></a>

```csharp
private void ResetMaxInactivity()
```

##### `ResetSessionLength` <a name="ResetSessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLength"></a>

```csharp
private void ResetSessionLength()
```

##### `ResetSessionLengthEnabled` <a name="ResetSessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLengthEnabled"></a>

```csharp
private void ResetSessionLengthEnabled()
```

##### `ResetSessionReauthMethod` <a name="ResetSessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionReauthMethod"></a>

```csharp
private void ResetSessionReauthMethod()
```

##### `ResetUseOidcMaxAge` <a name="ResetUseOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetUseOidcMaxAge"></a>

```csharp
private void ResetUseOidcMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivityInput">MaxInactivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabledInput">SessionLengthEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthInput">SessionLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethodInput">SessionReauthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAgeInput">UseOidcMaxAgeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivity">MaxInactivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLength">SessionLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabled">SessionLengthEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethod">SessionReauthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAge">UseOidcMaxAge</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInactivityInput`<sup>Optional</sup> <a name="MaxInactivityInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivityInput"></a>

```csharp
public string MaxInactivityInput { get; }
```

- *Type:* string

---

##### `SessionLengthEnabledInput`<sup>Optional</sup> <a name="SessionLengthEnabledInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabledInput"></a>

```csharp
public object SessionLengthEnabledInput { get; }
```

- *Type:* object

---

##### `SessionLengthInput`<sup>Optional</sup> <a name="SessionLengthInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthInput"></a>

```csharp
public string SessionLengthInput { get; }
```

- *Type:* string

---

##### `SessionReauthMethodInput`<sup>Optional</sup> <a name="SessionReauthMethodInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethodInput"></a>

```csharp
public string SessionReauthMethodInput { get; }
```

- *Type:* string

---

##### `UseOidcMaxAgeInput`<sup>Optional</sup> <a name="UseOidcMaxAgeInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAgeInput"></a>

```csharp
public object UseOidcMaxAgeInput { get; }
```

- *Type:* object

---

##### `MaxInactivity`<sup>Required</sup> <a name="MaxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivity"></a>

```csharp
public string MaxInactivity { get; }
```

- *Type:* string

---

##### `SessionLength`<sup>Required</sup> <a name="SessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLength"></a>

```csharp
public string SessionLength { get; }
```

- *Type:* string

---

##### `SessionLengthEnabled`<sup>Required</sup> <a name="SessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabled"></a>

```csharp
public object SessionLengthEnabled { get; }
```

- *Type:* object

---

##### `SessionReauthMethod`<sup>Required</sup> <a name="SessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethod"></a>

```csharp
public string SessionReauthMethod { get; }
```

- *Type:* string

---

##### `UseOidcMaxAge`<sup>Required</sup> <a name="UseOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAge"></a>

```csharp
public object UseOidcMaxAge { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.internalValue"></a>

```csharp
public AccessContextManagerGcpUserAccessBindingSessionSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a>

---


### AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference <a name="AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



