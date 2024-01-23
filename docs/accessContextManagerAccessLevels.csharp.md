# `accessContextManagerAccessLevels` Submodule <a name="`accessContextManagerAccessLevels` Submodule" id="@cdktf/provider-google.accessContextManagerAccessLevels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerAccessLevels <a name="AccessContextManagerAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels google_access_context_manager_access_levels}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevels(Construct Scope, string Id, AccessContextManagerAccessLevelsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig">AccessContextManagerAccessLevelsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig">AccessContextManagerAccessLevelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.putAccessLevels">PutAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.resetAccessLevels">ResetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessLevels` <a name="PutAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.putAccessLevels"></a>

```csharp
private void PutAccessLevels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.putAccessLevels.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.putTimeouts"></a>

```csharp
private void PutTimeouts(AccessContextManagerAccessLevelsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts">AccessContextManagerAccessLevelsTimeouts</a>

---

##### `ResetAccessLevels` <a name="ResetAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.resetAccessLevels"></a>

```csharp
private void ResetAccessLevels()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccessContextManagerAccessLevels resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerAccessLevels.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerAccessLevels.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerAccessLevels.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerAccessLevels.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AccessContextManagerAccessLevels resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessContextManagerAccessLevels to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessContextManagerAccessLevels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AccessContextManagerAccessLevels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.accessLevels">AccessLevels</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList">AccessContextManagerAccessLevelsAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference">AccessContextManagerAccessLevelsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.accessLevelsInput">AccessLevelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessLevels`<sup>Required</sup> <a name="AccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.accessLevels"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsList AccessLevels { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList">AccessContextManagerAccessLevelsAccessLevelsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.timeouts"></a>

```csharp
public AccessContextManagerAccessLevelsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference">AccessContextManagerAccessLevelsTimeoutsOutputReference</a>

---

##### `AccessLevelsInput`<sup>Optional</sup> <a name="AccessLevelsInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.accessLevelsInput"></a>

```csharp
public object AccessLevelsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevels.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerAccessLevelsAccessLevels <a name="AccessContextManagerAccessLevelsAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevels {
    string Name,
    string Title,
    AccessContextManagerAccessLevelsAccessLevelsBasic Basic = null,
    AccessContextManagerAccessLevelsAccessLevelsCustom Custom = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.name">Name</a></code> | <code>string</code> | Resource name for the Access Level. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.title">Title</a></code> | <code>string</code> | Human readable title. Must be unique within the Policy. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.basic">Basic</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic">AccessContextManagerAccessLevelsAccessLevelsBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.custom">Custom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom">AccessContextManagerAccessLevelsAccessLevelsCustom</a></code> | custom block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.description">Description</a></code> | <code>string</code> | Description of the AccessLevel and its use. Does not affect behavior. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Resource name for the Access Level.

The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#name AccessContextManagerAccessLevels#name}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Human readable title. Must be unique within the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#title AccessContextManagerAccessLevels#title}

---

##### `Basic`<sup>Optional</sup> <a name="Basic" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.basic"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsBasic Basic { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic">AccessContextManagerAccessLevelsAccessLevelsBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#basic AccessContextManagerAccessLevels#basic}

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.custom"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsCustom Custom { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom">AccessContextManagerAccessLevelsAccessLevelsCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#custom AccessContextManagerAccessLevels#custom}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevels.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the AccessLevel and its use. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#description AccessContextManagerAccessLevels#description}

---

### AccessContextManagerAccessLevelsAccessLevelsBasic <a name="AccessContextManagerAccessLevelsAccessLevelsBasic" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsBasic {
    object Conditions,
    string CombiningFunction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic.property.conditions">Conditions</a></code> | <code>object</code> | conditions block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic.property.combiningFunction">CombiningFunction</a></code> | <code>string</code> | How the conditions list should be combined to determine if a request is granted this AccessLevel. |

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic.property.conditions"></a>

```csharp
public object Conditions { get; set; }
```

- *Type:* object

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#conditions AccessContextManagerAccessLevels#conditions}

---

##### `CombiningFunction`<sup>Optional</sup> <a name="CombiningFunction" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic.property.combiningFunction"></a>

```csharp
public string CombiningFunction { get; set; }
```

- *Type:* string

How the conditions list should be combined to determine if a request is granted this AccessLevel.

If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#combining_function AccessContextManagerAccessLevels#combining_function}

---

### AccessContextManagerAccessLevelsAccessLevelsBasicConditions <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditions" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditions {
    AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy DevicePolicy = null,
    string[] IpSubnetworks = null,
    string[] Members = null,
    object Negate = null,
    string[] Regions = null,
    string[] RequiredAccessLevels = null,
    object VpcNetworkSources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.devicePolicy">DevicePolicy</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.ipSubnetworks">IpSubnetworks</a></code> | <code>string[]</code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.members">Members</a></code> | <code>string[]</code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.negate">Negate</a></code> | <code>object</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.regions">Regions</a></code> | <code>string[]</code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.requiredAccessLevels">RequiredAccessLevels</a></code> | <code>string[]</code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.vpcNetworkSources">VpcNetworkSources</a></code> | <code>object</code> | vpc_network_sources block. |

---

##### `DevicePolicy`<sup>Optional</sup> <a name="DevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.devicePolicy"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy DevicePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#device_policy AccessContextManagerAccessLevels#device_policy}

---

##### `IpSubnetworks`<sup>Optional</sup> <a name="IpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.ipSubnetworks"></a>

```csharp
public string[] IpSubnetworks { get; set; }
```

- *Type:* string[]

A list of CIDR block IP subnetwork specification.

May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#ip_subnetworks AccessContextManagerAccessLevels#ip_subnetworks}

---

##### `Members`<sup>Optional</sup> <a name="Members" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#members AccessContextManagerAccessLevels#members}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.negate"></a>

```csharp
public object Negate { get; set; }
```

- *Type:* object

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#negate AccessContextManagerAccessLevels#negate}

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#regions AccessContextManagerAccessLevels#regions}

---

##### `RequiredAccessLevels`<sup>Optional</sup> <a name="RequiredAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.requiredAccessLevels"></a>

```csharp
public string[] RequiredAccessLevels { get; set; }
```

- *Type:* string[]

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#required_access_levels AccessContextManagerAccessLevels#required_access_levels}

---

##### `VpcNetworkSources`<sup>Optional</sup> <a name="VpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.vpcNetworkSources"></a>

```csharp
public object VpcNetworkSources { get; set; }
```

- *Type:* object

vpc_network_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#vpc_network_sources AccessContextManagerAccessLevels#vpc_network_sources}

---

### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy {
    string[] AllowedDeviceManagementLevels = null,
    string[] AllowedEncryptionStatuses = null,
    object OsConstraints = null,
    object RequireAdminApproval = null,
    object RequireCorpOwned = null,
    object RequireScreenLock = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels">AllowedDeviceManagementLevels</a></code> | <code>string[]</code> | A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedEncryptionStatuses">AllowedEncryptionStatuses</a></code> | <code>string[]</code> | A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.osConstraints">OsConstraints</a></code> | <code>object</code> | os_constraints block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireAdminApproval">RequireAdminApproval</a></code> | <code>object</code> | Whether the device needs to be approved by the customer admin. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireCorpOwned">RequireCorpOwned</a></code> | <code>object</code> | Whether the device needs to be corp owned. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireScreenLock">RequireScreenLock</a></code> | <code>object</code> | Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false. |

---

##### `AllowedDeviceManagementLevels`<sup>Optional</sup> <a name="AllowedDeviceManagementLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels"></a>

```csharp
public string[] AllowedDeviceManagementLevels { get; set; }
```

- *Type:* string[]

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#allowed_device_management_levels AccessContextManagerAccessLevels#allowed_device_management_levels}

---

##### `AllowedEncryptionStatuses`<sup>Optional</sup> <a name="AllowedEncryptionStatuses" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedEncryptionStatuses"></a>

```csharp
public string[] AllowedEncryptionStatuses { get; set; }
```

- *Type:* string[]

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#allowed_encryption_statuses AccessContextManagerAccessLevels#allowed_encryption_statuses}

---

##### `OsConstraints`<sup>Optional</sup> <a name="OsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.osConstraints"></a>

```csharp
public object OsConstraints { get; set; }
```

- *Type:* object

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#os_constraints AccessContextManagerAccessLevels#os_constraints}

---

##### `RequireAdminApproval`<sup>Optional</sup> <a name="RequireAdminApproval" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireAdminApproval"></a>

```csharp
public object RequireAdminApproval { get; set; }
```

- *Type:* object

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#require_admin_approval AccessContextManagerAccessLevels#require_admin_approval}

---

##### `RequireCorpOwned`<sup>Optional</sup> <a name="RequireCorpOwned" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireCorpOwned"></a>

```csharp
public object RequireCorpOwned { get; set; }
```

- *Type:* object

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#require_corp_owned AccessContextManagerAccessLevels#require_corp_owned}

---

##### `RequireScreenLock`<sup>Optional</sup> <a name="RequireScreenLock" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireScreenLock"></a>

```csharp
public object RequireScreenLock { get; set; }
```

- *Type:* object

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#require_screen_lock AccessContextManagerAccessLevels#require_screen_lock}

---

### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints {
    string OsType,
    string MinimumVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.osType">OsType</a></code> | <code>string</code> | The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.minimumVersion">MinimumVersion</a></code> | <code>string</code> | The minimum allowed OS version. |

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.osType"></a>

```csharp
public string OsType { get; set; }
```

- *Type:* string

The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#os_type AccessContextManagerAccessLevels#os_type}

---

##### `MinimumVersion`<sup>Optional</sup> <a name="MinimumVersion" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.minimumVersion"></a>

```csharp
public string MinimumVersion { get; set; }
```

- *Type:* string

The minimum allowed OS version.

If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#minimum_version AccessContextManagerAccessLevels#minimum_version}

---

### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources {
    AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork VpcSubnetwork = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources.property.vpcSubnetwork">VpcSubnetwork</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | vpc_subnetwork block. |

---

##### `VpcSubnetwork`<sup>Optional</sup> <a name="VpcSubnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources.property.vpcSubnetwork"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork VpcSubnetwork { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

vpc_subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#vpc_subnetwork AccessContextManagerAccessLevels#vpc_subnetwork}

---

### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork {
    string Network,
    string[] VpcIpSubnetworks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.network">Network</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks">VpcIpSubnetworks</a></code> | <code>string[]</code> | CIDR block IP subnetwork specification. Must be IPv4. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Required.

Network name to be allowed by this Access Level. Networks of foreign organizations requires 'compute.network.get' permission to be granted to caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#network AccessContextManagerAccessLevels#network}

---

##### `VpcIpSubnetworks`<sup>Optional</sup> <a name="VpcIpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks"></a>

```csharp
public string[] VpcIpSubnetworks { get; set; }
```

- *Type:* string[]

CIDR block IP subnetwork specification. Must be IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#vpc_ip_subnetworks AccessContextManagerAccessLevels#vpc_ip_subnetworks}

---

### AccessContextManagerAccessLevelsAccessLevelsCustom <a name="AccessContextManagerAccessLevelsAccessLevelsCustom" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsCustom {
    AccessContextManagerAccessLevelsAccessLevelsCustomExpr Expr
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr">AccessContextManagerAccessLevelsAccessLevelsCustomExpr</a></code> | expr block. |

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom.property.expr"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsCustomExpr Expr { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr">AccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#expr AccessContextManagerAccessLevels#expr}

---

### AccessContextManagerAccessLevelsAccessLevelsCustomExpr <a name="AccessContextManagerAccessLevelsAccessLevelsCustomExpr" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsCustomExpr {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#expression AccessContextManagerAccessLevels#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#description AccessContextManagerAccessLevels#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#location AccessContextManagerAccessLevels#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#title AccessContextManagerAccessLevels#title}

---

### AccessContextManagerAccessLevelsConfig <a name="AccessContextManagerAccessLevelsConfig" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Parent,
    object AccessLevels = null,
    string Id = null,
    AccessContextManagerAccessLevelsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.parent">Parent</a></code> | <code>string</code> | The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.accessLevels">AccessLevels</a></code> | <code>object</code> | access_levels block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#id AccessContextManagerAccessLevels#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts">AccessContextManagerAccessLevelsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#parent AccessContextManagerAccessLevels#parent}

---

##### `AccessLevels`<sup>Optional</sup> <a name="AccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.accessLevels"></a>

```csharp
public object AccessLevels { get; set; }
```

- *Type:* object

access_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#access_levels AccessContextManagerAccessLevels#access_levels}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#id AccessContextManagerAccessLevels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsConfig.property.timeouts"></a>

```csharp
public AccessContextManagerAccessLevelsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts">AccessContextManagerAccessLevelsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#timeouts AccessContextManagerAccessLevels#timeouts}

---

### AccessContextManagerAccessLevelsTimeouts <a name="AccessContextManagerAccessLevelsTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#create AccessContextManagerAccessLevels#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#delete AccessContextManagerAccessLevels#delete}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#update AccessContextManagerAccessLevels#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#create AccessContextManagerAccessLevels#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#delete AccessContextManagerAccessLevels#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/access_context_manager_access_levels#update AccessContextManagerAccessLevels#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.get"></a>

```csharp
private AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion">ResetMinimumVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinimumVersion` <a name="ResetMinimumVersion" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion"></a>

```csharp
private void ResetMinimumVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput">MinimumVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput">OsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion">MinimumVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType">OsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinimumVersionInput`<sup>Optional</sup> <a name="MinimumVersionInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput"></a>

```csharp
public string MinimumVersionInput { get; }
```

- *Type:* string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput"></a>

```csharp
public string OsTypeInput { get; }
```

- *Type:* string

---

##### `MinimumVersion`<sup>Required</sup> <a name="MinimumVersion" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion"></a>

```csharp
public string MinimumVersion { get; }
```

- *Type:* string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType"></a>

```csharp
public string OsType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.putOsConstraints">PutOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels">ResetAllowedDeviceManagementLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses">ResetAllowedEncryptionStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetOsConstraints">ResetOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval">ResetRequireAdminApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned">ResetRequireCorpOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock">ResetRequireScreenLock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOsConstraints` <a name="PutOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.putOsConstraints"></a>

```csharp
private void PutOsConstraints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.putOsConstraints.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowedDeviceManagementLevels` <a name="ResetAllowedDeviceManagementLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels"></a>

```csharp
private void ResetAllowedDeviceManagementLevels()
```

##### `ResetAllowedEncryptionStatuses` <a name="ResetAllowedEncryptionStatuses" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses"></a>

```csharp
private void ResetAllowedEncryptionStatuses()
```

##### `ResetOsConstraints` <a name="ResetOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetOsConstraints"></a>

```csharp
private void ResetOsConstraints()
```

##### `ResetRequireAdminApproval` <a name="ResetRequireAdminApproval" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval"></a>

```csharp
private void ResetRequireAdminApproval()
```

##### `ResetRequireCorpOwned` <a name="ResetRequireCorpOwned" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned"></a>

```csharp
private void ResetRequireCorpOwned()
```

##### `ResetRequireScreenLock` <a name="ResetRequireScreenLock" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock"></a>

```csharp
private void ResetRequireScreenLock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraints">OsConstraints</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput">AllowedDeviceManagementLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput">AllowedEncryptionStatusesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput">OsConstraintsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput">RequireAdminApprovalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput">RequireCorpOwnedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput">RequireScreenLockInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels">AllowedDeviceManagementLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses">AllowedEncryptionStatuses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval">RequireAdminApproval</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned">RequireCorpOwned</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLock">RequireScreenLock</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OsConstraints`<sup>Required</sup> <a name="OsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraints"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList OsConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList</a>

---

##### `AllowedDeviceManagementLevelsInput`<sup>Optional</sup> <a name="AllowedDeviceManagementLevelsInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput"></a>

```csharp
public string[] AllowedDeviceManagementLevelsInput { get; }
```

- *Type:* string[]

---

##### `AllowedEncryptionStatusesInput`<sup>Optional</sup> <a name="AllowedEncryptionStatusesInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput"></a>

```csharp
public string[] AllowedEncryptionStatusesInput { get; }
```

- *Type:* string[]

---

##### `OsConstraintsInput`<sup>Optional</sup> <a name="OsConstraintsInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput"></a>

```csharp
public object OsConstraintsInput { get; }
```

- *Type:* object

---

##### `RequireAdminApprovalInput`<sup>Optional</sup> <a name="RequireAdminApprovalInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput"></a>

```csharp
public object RequireAdminApprovalInput { get; }
```

- *Type:* object

---

##### `RequireCorpOwnedInput`<sup>Optional</sup> <a name="RequireCorpOwnedInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput"></a>

```csharp
public object RequireCorpOwnedInput { get; }
```

- *Type:* object

---

##### `RequireScreenLockInput`<sup>Optional</sup> <a name="RequireScreenLockInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput"></a>

```csharp
public object RequireScreenLockInput { get; }
```

- *Type:* object

---

##### `AllowedDeviceManagementLevels`<sup>Required</sup> <a name="AllowedDeviceManagementLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels"></a>

```csharp
public string[] AllowedDeviceManagementLevels { get; }
```

- *Type:* string[]

---

##### `AllowedEncryptionStatuses`<sup>Required</sup> <a name="AllowedEncryptionStatuses" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses"></a>

```csharp
public string[] AllowedEncryptionStatuses { get; }
```

- *Type:* string[]

---

##### `RequireAdminApproval`<sup>Required</sup> <a name="RequireAdminApproval" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval"></a>

```csharp
public object RequireAdminApproval { get; }
```

- *Type:* object

---

##### `RequireCorpOwned`<sup>Required</sup> <a name="RequireCorpOwned" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned"></a>

```csharp
public object RequireCorpOwned { get; }
```

- *Type:* object

---

##### `RequireScreenLock`<sup>Required</sup> <a name="RequireScreenLock" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLock"></a>

```csharp
public object RequireScreenLock { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.internalValue"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

---


### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.get"></a>

```csharp
private AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy">PutDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putVpcNetworkSources">PutVpcNetworkSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetDevicePolicy">ResetDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetIpSubnetworks">ResetIpSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetMembers">ResetMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRequiredAccessLevels">ResetRequiredAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetVpcNetworkSources">ResetVpcNetworkSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDevicePolicy` <a name="PutDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy"></a>

```csharp
private void PutDevicePolicy(AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

---

##### `PutVpcNetworkSources` <a name="PutVpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putVpcNetworkSources"></a>

```csharp
private void PutVpcNetworkSources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putVpcNetworkSources.parameter.value"></a>

- *Type:* object

---

##### `ResetDevicePolicy` <a name="ResetDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetDevicePolicy"></a>

```csharp
private void ResetDevicePolicy()
```

##### `ResetIpSubnetworks` <a name="ResetIpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetIpSubnetworks"></a>

```csharp
private void ResetIpSubnetworks()
```

##### `ResetMembers` <a name="ResetMembers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetMembers"></a>

```csharp
private void ResetMembers()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRegions"></a>

```csharp
private void ResetRegions()
```

##### `ResetRequiredAccessLevels` <a name="ResetRequiredAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRequiredAccessLevels"></a>

```csharp
private void ResetRequiredAccessLevels()
```

##### `ResetVpcNetworkSources` <a name="ResetVpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetVpcNetworkSources"></a>

```csharp
private void ResetVpcNetworkSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicy">DevicePolicy</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.vpcNetworkSources">VpcNetworkSources</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicyInput">DevicePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworksInput">IpSubnetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negateInput">NegateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevelsInput">RequiredAccessLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.vpcNetworkSourcesInput">VpcNetworkSourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworks">IpSubnetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negate">Negate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevels">RequiredAccessLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DevicePolicy`<sup>Required</sup> <a name="DevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicy"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference DevicePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference</a>

---

##### `VpcNetworkSources`<sup>Required</sup> <a name="VpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.vpcNetworkSources"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList VpcNetworkSources { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList</a>

---

##### `DevicePolicyInput`<sup>Optional</sup> <a name="DevicePolicyInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicyInput"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy DevicePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

---

##### `IpSubnetworksInput`<sup>Optional</sup> <a name="IpSubnetworksInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworksInput"></a>

```csharp
public string[] IpSubnetworksInput { get; }
```

- *Type:* string[]

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negateInput"></a>

```csharp
public object NegateInput { get; }
```

- *Type:* object

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `RequiredAccessLevelsInput`<sup>Optional</sup> <a name="RequiredAccessLevelsInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevelsInput"></a>

```csharp
public string[] RequiredAccessLevelsInput { get; }
```

- *Type:* string[]

---

##### `VpcNetworkSourcesInput`<sup>Optional</sup> <a name="VpcNetworkSourcesInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.vpcNetworkSourcesInput"></a>

```csharp
public object VpcNetworkSourcesInput { get; }
```

- *Type:* object

---

##### `IpSubnetworks`<sup>Required</sup> <a name="IpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworks"></a>

```csharp
public string[] IpSubnetworks { get; }
```

- *Type:* string[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negate"></a>

```csharp
public object Negate { get; }
```

- *Type:* object

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `RequiredAccessLevels`<sup>Required</sup> <a name="RequiredAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevels"></a>

```csharp
public string[] RequiredAccessLevels { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.get"></a>

```csharp
private AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork">PutVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resetVpcSubnetwork">ResetVpcSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcSubnetwork` <a name="PutVpcSubnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork"></a>

```csharp
private void PutVpcSubnetwork(AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---

##### `ResetVpcSubnetwork` <a name="ResetVpcSubnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resetVpcSubnetwork"></a>

```csharp
private void ResetVpcSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetwork">VpcSubnetwork</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput">VpcSubnetworkInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcSubnetwork`<sup>Required</sup> <a name="VpcSubnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetwork"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference VpcSubnetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference</a>

---

##### `VpcSubnetworkInput`<sup>Optional</sup> <a name="VpcSubnetworkInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork VpcSubnetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference <a name="AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks">ResetVpcIpSubnetworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcIpSubnetworks` <a name="ResetVpcIpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks"></a>

```csharp
private void ResetVpcIpSubnetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput">VpcIpSubnetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks">VpcIpSubnetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `VpcIpSubnetworksInput`<sup>Optional</sup> <a name="VpcIpSubnetworksInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput"></a>

```csharp
public string[] VpcIpSubnetworksInput { get; }
```

- *Type:* string[]

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `VpcIpSubnetworks`<sup>Required</sup> <a name="VpcIpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks"></a>

```csharp
public string[] VpcIpSubnetworks { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---


### AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference <a name="AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resetCombiningFunction">ResetCombiningFunction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.putConditions"></a>

```csharp
private void PutConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.putConditions.parameter.value"></a>

- *Type:* object

---

##### `ResetCombiningFunction` <a name="ResetCombiningFunction" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resetCombiningFunction"></a>

```csharp
private void ResetCombiningFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunctionInput">CombiningFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunction">CombiningFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic">AccessContextManagerAccessLevelsAccessLevelsBasic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditions"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList">AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList</a>

---

##### `CombiningFunctionInput`<sup>Optional</sup> <a name="CombiningFunctionInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunctionInput"></a>

```csharp
public string CombiningFunctionInput { get; }
```

- *Type:* string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditionsInput"></a>

```csharp
public object ConditionsInput { get; }
```

- *Type:* object

---

##### `CombiningFunction`<sup>Required</sup> <a name="CombiningFunction" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunction"></a>

```csharp
public string CombiningFunction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.internalValue"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsBasic InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic">AccessContextManagerAccessLevelsAccessLevelsBasic</a>

---


### AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference <a name="AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr">AccessContextManagerAccessLevelsAccessLevelsCustomExpr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.internalValue"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsCustomExpr InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr">AccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

---


### AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference <a name="AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr">PutExpr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpr` <a name="PutExpr" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr"></a>

```csharp
private void PutExpr(AccessContextManagerAccessLevelsAccessLevelsCustomExpr Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr">AccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference">AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.exprInput">ExprInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr">AccessContextManagerAccessLevelsAccessLevelsCustomExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom">AccessContextManagerAccessLevelsAccessLevelsCustom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.expr"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference Expr { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference">AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference</a>

---

##### `ExprInput`<sup>Optional</sup> <a name="ExprInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.exprInput"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsCustomExpr ExprInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomExpr">AccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.internalValue"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsCustom InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom">AccessContextManagerAccessLevelsAccessLevelsCustom</a>

---


### AccessContextManagerAccessLevelsAccessLevelsList <a name="AccessContextManagerAccessLevelsAccessLevelsList" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.get"></a>

```csharp
private AccessContextManagerAccessLevelsAccessLevelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessContextManagerAccessLevelsAccessLevelsOutputReference <a name="AccessContextManagerAccessLevelsAccessLevelsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsAccessLevelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.putBasic">PutBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resetBasic">ResetBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasic` <a name="PutBasic" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.putBasic"></a>

```csharp
private void PutBasic(AccessContextManagerAccessLevelsAccessLevelsBasic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic">AccessContextManagerAccessLevelsAccessLevelsBasic</a>

---

##### `PutCustom` <a name="PutCustom" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.putCustom"></a>

```csharp
private void PutCustom(AccessContextManagerAccessLevelsAccessLevelsCustom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom">AccessContextManagerAccessLevelsAccessLevelsCustom</a>

---

##### `ResetBasic` <a name="ResetBasic" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resetBasic"></a>

```csharp
private void ResetBasic()
```

##### `ResetCustom` <a name="ResetCustom" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resetCustom"></a>

```csharp
private void ResetCustom()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basic">Basic</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference">AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference">AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basicInput">BasicInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic">AccessContextManagerAccessLevelsAccessLevelsBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.customInput">CustomInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom">AccessContextManagerAccessLevelsAccessLevelsCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Basic`<sup>Required</sup> <a name="Basic" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basic"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference Basic { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference">AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference</a>

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.custom"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference Custom { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference">AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference</a>

---

##### `BasicInput`<sup>Optional</sup> <a name="BasicInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basicInput"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsBasic BasicInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsBasic">AccessContextManagerAccessLevelsAccessLevelsBasic</a>

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.customInput"></a>

```csharp
public AccessContextManagerAccessLevelsAccessLevelsCustom CustomInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsCustom">AccessContextManagerAccessLevelsAccessLevelsCustom</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsAccessLevelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessContextManagerAccessLevelsTimeoutsOutputReference <a name="AccessContextManagerAccessLevelsTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAccessLevelsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessLevels.AccessContextManagerAccessLevelsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



