# `accessContextManagerServicePerimeterIngressPolicy` Submodule <a name="`accessContextManagerServicePerimeterIngressPolicy` Submodule" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerServicePerimeterIngressPolicy <a name="AccessContextManagerServicePerimeterIngressPolicy" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy google_access_context_manager_service_perimeter_ingress_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicy(Construct Scope, string Id, AccessContextManagerServicePerimeterIngressPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig">AccessContextManagerServicePerimeterIngressPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig">AccessContextManagerServicePerimeterIngressPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.putIngressFrom">PutIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.putIngressTo">PutIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.resetIngressFrom">ResetIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.resetIngressTo">ResetIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIngressFrom` <a name="PutIngressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.putIngressFrom"></a>

```csharp
private void PutIngressFrom(AccessContextManagerServicePerimeterIngressPolicyIngressFrom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.putIngressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFrom">AccessContextManagerServicePerimeterIngressPolicyIngressFrom</a>

---

##### `PutIngressTo` <a name="PutIngressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.putIngressTo"></a>

```csharp
private void PutIngressTo(AccessContextManagerServicePerimeterIngressPolicyIngressTo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.putIngressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressTo">AccessContextManagerServicePerimeterIngressPolicyIngressTo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(AccessContextManagerServicePerimeterIngressPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeouts">AccessContextManagerServicePerimeterIngressPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIngressFrom` <a name="ResetIngressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.resetIngressFrom"></a>

```csharp
private void ResetIngressFrom()
```

##### `ResetIngressTo` <a name="ResetIngressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.resetIngressTo"></a>

```csharp
private void ResetIngressTo()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.resetTitle"></a>

```csharp
private void ResetTitle()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccessContextManagerServicePerimeterIngressPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerServicePerimeterIngressPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerServicePerimeterIngressPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerServicePerimeterIngressPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AccessContextManagerServicePerimeterIngressPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AccessContextManagerServicePerimeterIngressPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessContextManagerServicePerimeterIngressPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessContextManagerServicePerimeterIngressPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AccessContextManagerServicePerimeterIngressPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.accessPolicyId">AccessPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.ingressFrom">IngressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference">AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.ingressTo">IngressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference">AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference">AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.ingressFromInput">IngressFromInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFrom">AccessContextManagerServicePerimeterIngressPolicyIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.ingressToInput">IngressToInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressTo">AccessContextManagerServicePerimeterIngressPolicyIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.perimeterInput">PerimeterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.perimeter">Perimeter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.title">Title</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessPolicyId`<sup>Required</sup> <a name="AccessPolicyId" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.accessPolicyId"></a>

```csharp
public string AccessPolicyId { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `IngressFrom`<sup>Required</sup> <a name="IngressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.ingressFrom"></a>

```csharp
public AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference IngressFrom { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference">AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference</a>

---

##### `IngressTo`<sup>Required</sup> <a name="IngressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.ingressTo"></a>

```csharp
public AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference IngressTo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference">AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.timeouts"></a>

```csharp
public AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference">AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngressFromInput`<sup>Optional</sup> <a name="IngressFromInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.ingressFromInput"></a>

```csharp
public AccessContextManagerServicePerimeterIngressPolicyIngressFrom IngressFromInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFrom">AccessContextManagerServicePerimeterIngressPolicyIngressFrom</a>

---

##### `IngressToInput`<sup>Optional</sup> <a name="IngressToInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.ingressToInput"></a>

```csharp
public AccessContextManagerServicePerimeterIngressPolicyIngressTo IngressToInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressTo">AccessContextManagerServicePerimeterIngressPolicyIngressTo</a>

---

##### `PerimeterInput`<sup>Optional</sup> <a name="PerimeterInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.perimeterInput"></a>

```csharp
public string PerimeterInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Perimeter`<sup>Required</sup> <a name="Perimeter" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.perimeter"></a>

```csharp
public string Perimeter { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerServicePerimeterIngressPolicyConfig <a name="AccessContextManagerServicePerimeterIngressPolicyConfig" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Perimeter,
    string Id = null,
    AccessContextManagerServicePerimeterIngressPolicyIngressFrom IngressFrom = null,
    AccessContextManagerServicePerimeterIngressPolicyIngressTo IngressTo = null,
    AccessContextManagerServicePerimeterIngressPolicyTimeouts Timeouts = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.perimeter">Perimeter</a></code> | <code>string</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#id AccessContextManagerServicePerimeterIngressPolicy#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.ingressFrom">IngressFrom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFrom">AccessContextManagerServicePerimeterIngressPolicyIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.ingressTo">IngressTo</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressTo">AccessContextManagerServicePerimeterIngressPolicyIngressTo</a></code> | ingress_to block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeouts">AccessContextManagerServicePerimeterIngressPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.title">Title</a></code> | <code>string</code> | Human readable title. Must be unique within the perimeter. Does not affect behavior. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Perimeter`<sup>Required</sup> <a name="Perimeter" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.perimeter"></a>

```csharp
public string Perimeter { get; set; }
```

- *Type:* string

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#perimeter AccessContextManagerServicePerimeterIngressPolicy#perimeter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#id AccessContextManagerServicePerimeterIngressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngressFrom`<sup>Optional</sup> <a name="IngressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.ingressFrom"></a>

```csharp
public AccessContextManagerServicePerimeterIngressPolicyIngressFrom IngressFrom { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFrom">AccessContextManagerServicePerimeterIngressPolicyIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#ingress_from AccessContextManagerServicePerimeterIngressPolicy#ingress_from}

---

##### `IngressTo`<sup>Optional</sup> <a name="IngressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.ingressTo"></a>

```csharp
public AccessContextManagerServicePerimeterIngressPolicyIngressTo IngressTo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressTo">AccessContextManagerServicePerimeterIngressPolicyIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#ingress_to AccessContextManagerServicePerimeterIngressPolicy#ingress_to}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.timeouts"></a>

```csharp
public AccessContextManagerServicePerimeterIngressPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeouts">AccessContextManagerServicePerimeterIngressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#timeouts AccessContextManagerServicePerimeterIngressPolicy#timeouts}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Human readable title. Must be unique within the perimeter. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#title AccessContextManagerServicePerimeterIngressPolicy#title}

---

### AccessContextManagerServicePerimeterIngressPolicyIngressFrom <a name="AccessContextManagerServicePerimeterIngressPolicyIngressFrom" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFrom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicyIngressFrom {
    string[] Identities = null,
    string IdentityType = null,
    object Sources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.identities">Identities</a></code> | <code>string[]</code> | Identities can be an individual user, service account, Google group, or third-party identity. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.identityType">IdentityType</a></code> | <code>string</code> | Specifies the type of identities that are allowed access from outside the perimeter. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.sources">Sources</a></code> | <code>object</code> | sources block. |

---

##### `Identities`<sup>Optional</sup> <a name="Identities" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.identities"></a>

```csharp
public string[] Identities { get; set; }
```

- *Type:* string[]

Identities can be an individual user, service account, Google group, or third-party identity.

For third-party identity, only single identities
are supported and other identity types are not supported.The v1 identities
that have the prefix user, group and serviceAccount in
https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#identities AccessContextManagerServicePerimeterIngressPolicy#identities}

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.identityType"></a>

```csharp
public string IdentityType { get; set; }
```

- *Type:* string

Specifies the type of identities that are allowed access from outside the perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#identity_type AccessContextManagerServicePerimeterIngressPolicy#identity_type}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.sources"></a>

```csharp
public object Sources { get; set; }
```

- *Type:* object

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#sources AccessContextManagerServicePerimeterIngressPolicy#sources}

---

### AccessContextManagerServicePerimeterIngressPolicyIngressFromSources <a name="AccessContextManagerServicePerimeterIngressPolicyIngressFromSources" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicyIngressFromSources {
    string AccessLevel = null,
    string Resource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSources.property.accessLevel">AccessLevel</a></code> | <code>string</code> | An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSources.property.resource">Resource</a></code> | <code>string</code> | A Google Cloud resource that is allowed to ingress the perimeter. |

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSources.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet.

'AccessLevels' listed
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
resources within the perimeter can only be accessed via Google Cloud calls
with request origins within the perimeter.
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
If * is specified, then all IngressSources will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#access_level AccessContextManagerServicePerimeterIngressPolicy#access_level}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSources.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

A Google Cloud resource that is allowed to ingress the perimeter.

Requests from these resources will be allowed to access perimeter data.
Currently only projects and VPCs are allowed.
Project format: 'projects/{projectNumber}'
VPC network format:
'//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}'.
The project may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the case
of allowing all Google Cloud resources only is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#resource AccessContextManagerServicePerimeterIngressPolicy#resource}

---

### AccessContextManagerServicePerimeterIngressPolicyIngressTo <a name="AccessContextManagerServicePerimeterIngressPolicyIngressTo" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressTo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicyIngressTo {
    object Operations = null,
    string[] Resources = null,
    string[] Roles = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressTo.property.operations">Operations</a></code> | <code>object</code> | operations block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressTo.property.resources">Resources</a></code> | <code>string[]</code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressTo.property.roles">Roles</a></code> | <code>string[]</code> | A list of IAM roles that represent the set of operations that the sources specified in the corresponding 'IngressFrom' are allowed to perform. |

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressTo.property.operations"></a>

```csharp
public object Operations { get; set; }
```

- *Type:* object

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#operations AccessContextManagerServicePerimeterIngressPolicy#operations}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressTo.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'.

A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#resources AccessContextManagerServicePerimeterIngressPolicy#resources}

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressTo.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

A list of IAM roles that represent the set of operations that the sources specified in the corresponding 'IngressFrom' are allowed to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#roles AccessContextManagerServicePerimeterIngressPolicy#roles}

---

### AccessContextManagerServicePerimeterIngressPolicyIngressToOperations <a name="AccessContextManagerServicePerimeterIngressPolicyIngressToOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicyIngressToOperations {
    object MethodSelectors = null,
    string ServiceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperations.property.methodSelectors">MethodSelectors</a></code> | <code>object</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperations.property.serviceName">ServiceName</a></code> | <code>string</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `MethodSelectors`<sup>Optional</sup> <a name="MethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperations.property.methodSelectors"></a>

```csharp
public object MethodSelectors { get; set; }
```

- *Type:* object

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#method_selectors AccessContextManagerServicePerimeterIngressPolicy#method_selectors}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperations.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#service_name AccessContextManagerServicePerimeterIngressPolicy#service_name}

---

### AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors <a name="AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors {
    string Method = null,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors.property.method">Method</a></code> | <code>string</code> | Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors.property.permission">Permission</a></code> | <code>string</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'.

If '*' used as value for 'method', then
ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#method AccessContextManagerServicePerimeterIngressPolicy#method}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#permission AccessContextManagerServicePerimeterIngressPolicy#permission}

---

### AccessContextManagerServicePerimeterIngressPolicyTimeouts <a name="AccessContextManagerServicePerimeterIngressPolicyTimeouts" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicyTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#create AccessContextManagerServicePerimeterIngressPolicy#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#delete AccessContextManagerServicePerimeterIngressPolicy#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#create AccessContextManagerServicePerimeterIngressPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/access_context_manager_service_perimeter_ingress_policy#delete AccessContextManagerServicePerimeterIngressPolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference <a name="AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetIdentities">ResetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSources` <a name="PutSources" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.putSources"></a>

```csharp
private void PutSources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.putSources.parameter.value"></a>

- *Type:* object

---

##### `ResetIdentities` <a name="ResetIdentities" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetIdentities"></a>

```csharp
private void ResetIdentities()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetIdentityType"></a>

```csharp
private void ResetIdentityType()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetSources"></a>

```csharp
private void ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList">AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identitiesInput">IdentitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identities">Identities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identityType">IdentityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFrom">AccessContextManagerServicePerimeterIngressPolicyIngressFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.sources"></a>

```csharp
public AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList Sources { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList">AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList</a>

---

##### `IdentitiesInput`<sup>Optional</sup> <a name="IdentitiesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identitiesInput"></a>

```csharp
public string[] IdentitiesInput { get; }
```

- *Type:* string[]

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identityTypeInput"></a>

```csharp
public string IdentityTypeInput { get; }
```

- *Type:* string

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.sourcesInput"></a>

```csharp
public object SourcesInput { get; }
```

- *Type:* object

---

##### `Identities`<sup>Required</sup> <a name="Identities" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identities"></a>

```csharp
public string[] Identities { get; }
```

- *Type:* string[]

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identityType"></a>

```csharp
public string IdentityType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.internalValue"></a>

```csharp
public AccessContextManagerServicePerimeterIngressPolicyIngressFrom InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFrom">AccessContextManagerServicePerimeterIngressPolicyIngressFrom</a>

---


### AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList <a name="AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.get"></a>

```csharp
private AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference <a name="AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList <a name="AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.get"></a>

```csharp
private AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList <a name="AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.get"></a>

```csharp
private AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference <a name="AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference <a name="AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.putMethodSelectors">PutMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resetMethodSelectors">ResetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMethodSelectors` <a name="PutMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.putMethodSelectors"></a>

```csharp
private void PutMethodSelectors(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* object

---

##### `ResetMethodSelectors` <a name="ResetMethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resetMethodSelectors"></a>

```csharp
private void ResetMethodSelectors()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.methodSelectors">MethodSelectors</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.methodSelectorsInput">MethodSelectorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MethodSelectors`<sup>Required</sup> <a name="MethodSelectors" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.methodSelectors"></a>

```csharp
public AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList MethodSelectors { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList">AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList</a>

---

##### `MethodSelectorsInput`<sup>Optional</sup> <a name="MethodSelectorsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.methodSelectorsInput"></a>

```csharp
public object MethodSelectorsInput { get; }
```

- *Type:* object

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference <a name="AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resetRoles">ResetRoles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.putOperations"></a>

```csharp
private void PutOperations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.putOperations.parameter.value"></a>

- *Type:* object

---

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resetOperations"></a>

```csharp
private void ResetOperations()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resetRoles"></a>

```csharp
private void ResetRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList">AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.operationsInput">OperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressTo">AccessContextManagerServicePerimeterIngressPolicyIngressTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.operations"></a>

```csharp
public AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList Operations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList">AccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList</a>

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.operationsInput"></a>

```csharp
public object OperationsInput { get; }
```

- *Type:* object

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.internalValue"></a>

```csharp
public AccessContextManagerServicePerimeterIngressPolicyIngressTo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyIngressTo">AccessContextManagerServicePerimeterIngressPolicyIngressTo</a>

---


### AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference <a name="AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerServicePerimeterIngressPolicy.AccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



