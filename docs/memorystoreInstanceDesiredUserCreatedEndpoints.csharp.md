# `memorystoreInstanceDesiredUserCreatedEndpoints` Submodule <a name="`memorystoreInstanceDesiredUserCreatedEndpoints` Submodule" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemorystoreInstanceDesiredUserCreatedEndpoints <a name="MemorystoreInstanceDesiredUserCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints google_memorystore_instance_desired_user_created_endpoints}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MemorystoreInstanceDesiredUserCreatedEndpoints(Construct Scope, string Id, MemorystoreInstanceDesiredUserCreatedEndpointsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig">MemorystoreInstanceDesiredUserCreatedEndpointsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig">MemorystoreInstanceDesiredUserCreatedEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.putDesiredUserCreatedEndpoints">PutDesiredUserCreatedEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetDesiredUserCreatedEndpoints">ResetDesiredUserCreatedEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDesiredUserCreatedEndpoints` <a name="PutDesiredUserCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.putDesiredUserCreatedEndpoints"></a>

```csharp
private void PutDesiredUserCreatedEndpoints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.putDesiredUserCreatedEndpoints.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts"></a>

```csharp
private void PutTimeouts(MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a>

---

##### `ResetDesiredUserCreatedEndpoints` <a name="ResetDesiredUserCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetDesiredUserCreatedEndpoints"></a>

```csharp
private void ResetDesiredUserCreatedEndpoints()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MemorystoreInstanceDesiredUserCreatedEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MemorystoreInstanceDesiredUserCreatedEndpoints.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MemorystoreInstanceDesiredUserCreatedEndpoints.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MemorystoreInstanceDesiredUserCreatedEndpoints.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MemorystoreInstanceDesiredUserCreatedEndpoints.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MemorystoreInstanceDesiredUserCreatedEndpoints resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MemorystoreInstanceDesiredUserCreatedEndpoints to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MemorystoreInstanceDesiredUserCreatedEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MemorystoreInstanceDesiredUserCreatedEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpoints">DesiredUserCreatedEndpoints</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference">MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpointsInput">DesiredUserCreatedEndpointsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DesiredUserCreatedEndpoints`<sup>Required</sup> <a name="DesiredUserCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpoints"></a>

```csharp
public MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList DesiredUserCreatedEndpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.timeouts"></a>

```csharp
public MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference">MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference</a>

---

##### `DesiredUserCreatedEndpointsInput`<sup>Optional</sup> <a name="DesiredUserCreatedEndpointsInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.desiredUserCreatedEndpointsInput"></a>

```csharp
public object DesiredUserCreatedEndpointsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpoints.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MemorystoreInstanceDesiredUserCreatedEndpointsConfig <a name="MemorystoreInstanceDesiredUserCreatedEndpointsConfig" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MemorystoreInstanceDesiredUserCreatedEndpointsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Region,
    object DesiredUserCreatedEndpoints = null,
    string Id = null,
    string Project = null,
    MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.name">Name</a></code> | <code>string</code> | The name of the Memorystore instance these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.region">Region</a></code> | <code>string</code> | The name of the region of the Memorystore instance these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.desiredUserCreatedEndpoints">DesiredUserCreatedEndpoints</a></code> | <code>object</code> | desired_user_created_endpoints block. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#id MemorystoreInstanceDesiredUserCreatedEndpoints#id}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#project MemorystoreInstanceDesiredUserCreatedEndpoints#project}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Memorystore instance these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#name MemorystoreInstanceDesiredUserCreatedEndpoints#name}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The name of the region of the Memorystore instance these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#region MemorystoreInstanceDesiredUserCreatedEndpoints#region}

---

##### `DesiredUserCreatedEndpoints`<sup>Optional</sup> <a name="DesiredUserCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.desiredUserCreatedEndpoints"></a>

```csharp
public object DesiredUserCreatedEndpoints { get; set; }
```

- *Type:* object

desired_user_created_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#desired_user_created_endpoints MemorystoreInstanceDesiredUserCreatedEndpoints#desired_user_created_endpoints}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#id MemorystoreInstanceDesiredUserCreatedEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#project MemorystoreInstanceDesiredUserCreatedEndpoints#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsConfig.property.timeouts"></a>

```csharp
public MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts">MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#timeouts MemorystoreInstanceDesiredUserCreatedEndpoints#timeouts}

---

### MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints <a name="MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints {
    object Connections = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints.property.connections">Connections</a></code> | <code>object</code> | connections block. |

---

##### `Connections`<sup>Optional</sup> <a name="Connections" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpoints.property.connections"></a>

```csharp
public object Connections { get; set; }
```

- *Type:* object

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#connections MemorystoreInstanceDesiredUserCreatedEndpoints#connections}

---

### MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections <a name="MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections {
    MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection PscConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections.property.pscConnection">PscConnection</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a></code> | psc_connection block. |

---

##### `PscConnection`<sup>Optional</sup> <a name="PscConnection" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnections.property.pscConnection"></a>

```csharp
public MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection PscConnection { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

psc_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#psc_connection MemorystoreInstanceDesiredUserCreatedEndpoints#psc_connection}

---

### MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection <a name="MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection {
    string ForwardingRule,
    string IpAddress,
    string Network,
    string PscConnectionId,
    string ServiceAttachment,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.forwardingRule">ForwardingRule</a></code> | <code>string</code> | The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.ipAddress">IpAddress</a></code> | <code>string</code> | The IP allocated on the consumer network for the PSC forwarding rule. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.network">Network</a></code> | <code>string</code> | The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.pscConnectionId">PscConnectionId</a></code> | <code>string</code> | The PSC connection id of the forwarding rule connected to the service attachment. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.serviceAttachment">ServiceAttachment</a></code> | <code>string</code> | The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.projectId">ProjectId</a></code> | <code>string</code> | The consumer project_id where the forwarding rule is created from. |

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.forwardingRule"></a>

```csharp
public string ForwardingRule { get; set; }
```

- *Type:* string

The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#forwarding_rule MemorystoreInstanceDesiredUserCreatedEndpoints#forwarding_rule}

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

The IP allocated on the consumer network for the PSC forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#ip_address MemorystoreInstanceDesiredUserCreatedEndpoints#ip_address}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#network MemorystoreInstanceDesiredUserCreatedEndpoints#network}

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.pscConnectionId"></a>

```csharp
public string PscConnectionId { get; set; }
```

- *Type:* string

The PSC connection id of the forwarding rule connected to the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#psc_connection_id MemorystoreInstanceDesiredUserCreatedEndpoints#psc_connection_id}

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.serviceAttachment"></a>

```csharp
public string ServiceAttachment { get; set; }
```

- *Type:* string

The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#service_attachment MemorystoreInstanceDesiredUserCreatedEndpoints#service_attachment}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#project_id MemorystoreInstanceDesiredUserCreatedEndpoints#project_id}

---

### MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts <a name="MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#create MemorystoreInstanceDesiredUserCreatedEndpoints#create}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#delete MemorystoreInstanceDesiredUserCreatedEndpoints#delete}. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#update MemorystoreInstanceDesiredUserCreatedEndpoints#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#create MemorystoreInstanceDesiredUserCreatedEndpoints#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#delete MemorystoreInstanceDesiredUserCreatedEndpoints#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/memorystore_instance_desired_user_created_endpoints#update MemorystoreInstanceDesiredUserCreatedEndpoints#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList <a name="MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.get"></a>

```csharp
private MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference <a name="MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection">PutPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resetPscConnection">ResetPscConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPscConnection` <a name="PutPscConnection" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection"></a>

```csharp
private void PutPscConnection(MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.putPscConnection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

---

##### `ResetPscConnection` <a name="ResetPscConnection" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.resetPscConnection"></a>

```csharp
private void ResetPscConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnection">PscConnection</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnectionInput">PscConnectionInput</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PscConnection`<sup>Required</sup> <a name="PscConnection" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnection"></a>

```csharp
public MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference PscConnection { get; }
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference</a>

---

##### `PscConnectionInput`<sup>Optional</sup> <a name="PscConnectionInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.pscConnectionInput"></a>

```csharp
public MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection PscConnectionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference <a name="MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus">PscConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput">ForwardingRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput">PscConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput">ServiceAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule">ForwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `PscConnectionStatus`<sup>Required</sup> <a name="PscConnectionStatus" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus"></a>

```csharp
public string PscConnectionStatus { get; }
```

- *Type:* string

---

##### `ForwardingRuleInput`<sup>Optional</sup> <a name="ForwardingRuleInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput"></a>

```csharp
public string ForwardingRuleInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `PscConnectionIdInput`<sup>Optional</sup> <a name="PscConnectionIdInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput"></a>

```csharp
public string PscConnectionIdInput { get; }
```

- *Type:* string

---

##### `ServiceAttachmentInput`<sup>Optional</sup> <a name="ServiceAttachmentInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput"></a>

```csharp
public string ServiceAttachmentInput { get; }
```

- *Type:* string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule"></a>

```csharp
public string ForwardingRule { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId"></a>

```csharp
public string PscConnectionId { get; }
```

- *Type:* string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment"></a>

```csharp
public string ServiceAttachment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnectionOutputReference.property.internalValue"></a>

```csharp
public MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsPscConnection</a>

---


### MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList <a name="MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.get"></a>

```csharp
private MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference <a name="MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.putConnections">PutConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resetConnections">ResetConnections</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnections` <a name="PutConnections" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.putConnections"></a>

```csharp
private void PutConnections(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.putConnections.parameter.value"></a>

- *Type:* object

---

##### `ResetConnections` <a name="ResetConnections" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.resetConnections"></a>

```csharp
private void ResetConnections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connectionsInput">ConnectionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connections"></a>

```csharp
public MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList Connections { get; }
```

- *Type:* <a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList">MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsConnectionsList</a>

---

##### `ConnectionsInput`<sup>Optional</sup> <a name="ConnectionsInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.connectionsInput"></a>

```csharp
public object ConnectionsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsDesiredUserCreatedEndpointsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference <a name="MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.memorystoreInstanceDesiredUserCreatedEndpoints.MemorystoreInstanceDesiredUserCreatedEndpointsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



