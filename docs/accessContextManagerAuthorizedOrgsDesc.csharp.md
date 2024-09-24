# `accessContextManagerAuthorizedOrgsDesc` Submodule <a name="`accessContextManagerAuthorizedOrgsDesc` Submodule" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerAuthorizedOrgsDesc <a name="AccessContextManagerAuthorizedOrgsDesc" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc google_access_context_manager_authorized_orgs_desc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAuthorizedOrgsDesc(Construct Scope, string Id, AccessContextManagerAuthorizedOrgsDescConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig">AccessContextManagerAuthorizedOrgsDescConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig">AccessContextManagerAuthorizedOrgsDescConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAssetType">ResetAssetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAuthorizationDirection">ResetAuthorizationDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAuthorizationType">ResetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetOrgs">ResetOrgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.putTimeouts"></a>

```csharp
private void PutTimeouts(AccessContextManagerAuthorizedOrgsDescTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a>

---

##### `ResetAssetType` <a name="ResetAssetType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAssetType"></a>

```csharp
private void ResetAssetType()
```

##### `ResetAuthorizationDirection` <a name="ResetAuthorizationDirection" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAuthorizationDirection"></a>

```csharp
private void ResetAuthorizationDirection()
```

##### `ResetAuthorizationType` <a name="ResetAuthorizationType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAuthorizationType"></a>

```csharp
private void ResetAuthorizationType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOrgs` <a name="ResetOrgs" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetOrgs"></a>

```csharp
private void ResetOrgs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccessContextManagerAuthorizedOrgsDesc resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerAuthorizedOrgsDesc.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerAuthorizedOrgsDesc.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerAuthorizedOrgsDesc.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerAuthorizedOrgsDesc.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AccessContextManagerAuthorizedOrgsDesc resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessContextManagerAuthorizedOrgsDesc to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessContextManagerAuthorizedOrgsDesc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AccessContextManagerAuthorizedOrgsDesc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference">AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.assetTypeInput">AssetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationDirectionInput">AuthorizationDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.orgsInput">OrgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.assetType">AssetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationDirection">AuthorizationDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.orgs">Orgs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.timeouts"></a>

```csharp
public AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference">AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AssetTypeInput`<sup>Optional</sup> <a name="AssetTypeInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.assetTypeInput"></a>

```csharp
public string AssetTypeInput { get; }
```

- *Type:* string

---

##### `AuthorizationDirectionInput`<sup>Optional</sup> <a name="AuthorizationDirectionInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationDirectionInput"></a>

```csharp
public string AuthorizationDirectionInput { get; }
```

- *Type:* string

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationTypeInput"></a>

```csharp
public string AuthorizationTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrgsInput`<sup>Optional</sup> <a name="OrgsInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.orgsInput"></a>

```csharp
public string[] OrgsInput { get; }
```

- *Type:* string[]

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.assetType"></a>

```csharp
public string AssetType { get; }
```

- *Type:* string

---

##### `AuthorizationDirection`<sup>Required</sup> <a name="AuthorizationDirection" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationDirection"></a>

```csharp
public string AuthorizationDirection { get; }
```

- *Type:* string

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Orgs`<sup>Required</sup> <a name="Orgs" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.orgs"></a>

```csharp
public string[] Orgs { get; }
```

- *Type:* string[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerAuthorizedOrgsDescConfig <a name="AccessContextManagerAuthorizedOrgsDescConfig" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAuthorizedOrgsDescConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Parent,
    string AssetType = null,
    string AuthorizationDirection = null,
    string AuthorizationType = null,
    string Id = null,
    string[] Orgs = null,
    AccessContextManagerAuthorizedOrgsDescTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.name">Name</a></code> | <code>string</code> | Resource name for the 'AuthorizedOrgsDesc'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.parent">Parent</a></code> | <code>string</code> | Required. Resource name for the access policy which owns this 'AuthorizedOrgsDesc'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.assetType">AssetType</a></code> | <code>string</code> | The type of entities that need to use the authorization relationship during evaluation, such as a device. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.authorizationDirection">AuthorizationDirection</a></code> | <code>string</code> | The direction of the authorization relationship between this organization and the organizations listed in the "orgs" field. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST". Possible values: ["AUTHORIZATION_TYPE_TRUST"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc#id AccessContextManagerAuthorizedOrgsDesc#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.orgs">Orgs</a></code> | <code>string[]</code> | The list of organization ids in this AuthorizedOrgsDesc. Format: 'organizations/<org_number>' Example: 'organizations/123456'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Resource name for the 'AuthorizedOrgsDesc'.

Format:
'accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}'.
The 'authorized_orgs_desc' component must begin with a letter, followed by
alphanumeric characters or '_'.
After you create an 'AuthorizedOrgsDesc', you cannot change its 'name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc#name AccessContextManagerAuthorizedOrgsDesc#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Required. Resource name for the access policy which owns this 'AuthorizedOrgsDesc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc#parent AccessContextManagerAuthorizedOrgsDesc#parent}

---

##### `AssetType`<sup>Optional</sup> <a name="AssetType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.assetType"></a>

```csharp
public string AssetType { get; set; }
```

- *Type:* string

The type of entities that need to use the authorization relationship during evaluation, such as a device.

Valid values are "ASSET_TYPE_DEVICE" and
"ASSET_TYPE_CREDENTIAL_STRENGTH". Possible values: ["ASSET_TYPE_DEVICE", "ASSET_TYPE_CREDENTIAL_STRENGTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc#asset_type AccessContextManagerAuthorizedOrgsDesc#asset_type}

---

##### `AuthorizationDirection`<sup>Optional</sup> <a name="AuthorizationDirection" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.authorizationDirection"></a>

```csharp
public string AuthorizationDirection { get; set; }
```

- *Type:* string

The direction of the authorization relationship between this organization and the organizations listed in the "orgs" field.

The valid values for this
field include the following:

AUTHORIZATION_DIRECTION_FROM: Allows this organization to evaluate traffic
in the organizations listed in the 'orgs' field.

AUTHORIZATION_DIRECTION_TO: Allows the organizations listed in the 'orgs'
field to evaluate the traffic in this organization.

For the authorization relationship to take effect, all of the organizations
must authorize and specify the appropriate relationship direction. For
example, if organization A authorized organization B and C to evaluate its
traffic, by specifying "AUTHORIZATION_DIRECTION_TO" as the authorization
direction, organizations B and C must specify
"AUTHORIZATION_DIRECTION_FROM" as the authorization direction in their
"AuthorizedOrgsDesc" resource. Possible values: ["AUTHORIZATION_DIRECTION_TO", "AUTHORIZATION_DIRECTION_FROM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc#authorization_direction AccessContextManagerAuthorizedOrgsDesc#authorization_direction}

---

##### `AuthorizationType`<sup>Optional</sup> <a name="AuthorizationType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; set; }
```

- *Type:* string

A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST". Possible values: ["AUTHORIZATION_TYPE_TRUST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc#authorization_type AccessContextManagerAuthorizedOrgsDesc#authorization_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc#id AccessContextManagerAuthorizedOrgsDesc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Orgs`<sup>Optional</sup> <a name="Orgs" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.orgs"></a>

```csharp
public string[] Orgs { get; set; }
```

- *Type:* string[]

The list of organization ids in this AuthorizedOrgsDesc. Format: 'organizations/<org_number>' Example: 'organizations/123456'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc#orgs AccessContextManagerAuthorizedOrgsDesc#orgs}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.timeouts"></a>

```csharp
public AccessContextManagerAuthorizedOrgsDescTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc#timeouts AccessContextManagerAuthorizedOrgsDesc#timeouts}

---

### AccessContextManagerAuthorizedOrgsDescTimeouts <a name="AccessContextManagerAuthorizedOrgsDescTimeouts" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAuthorizedOrgsDescTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc#create AccessContextManagerAuthorizedOrgsDesc#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc#delete AccessContextManagerAuthorizedOrgsDesc#delete}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc#update AccessContextManagerAuthorizedOrgsDesc#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc#create AccessContextManagerAuthorizedOrgsDesc#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc#delete AccessContextManagerAuthorizedOrgsDesc#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/access_context_manager_authorized_orgs_desc#update AccessContextManagerAuthorizedOrgsDesc#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference <a name="AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



