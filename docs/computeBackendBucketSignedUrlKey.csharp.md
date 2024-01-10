# `computeBackendBucketSignedUrlKey` Submodule <a name="`computeBackendBucketSignedUrlKey` Submodule" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBackendBucketSignedUrlKey <a name="ComputeBackendBucketSignedUrlKey" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_backend_bucket_signed_url_key google_compute_backend_bucket_signed_url_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeBackendBucketSignedUrlKey(Construct Scope, string Id, ComputeBackendBucketSignedUrlKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig">ComputeBackendBucketSignedUrlKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig">ComputeBackendBucketSignedUrlKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeBackendBucketSignedUrlKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeBackendBucketSignedUrlKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeBackendBucketSignedUrlKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeBackendBucketSignedUrlKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeBackendBucketSignedUrlKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeBackendBucketSignedUrlKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeBackendBucketSignedUrlKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeBackendBucketSignedUrlKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeBackendBucketSignedUrlKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_backend_bucket_signed_url_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeBackendBucketSignedUrlKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference">ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucketInput">BackendBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValueInput">KeyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucket">BackendBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValue">KeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeouts"></a>

```csharp
public ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference">ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference</a>

---

##### `BackendBucketInput`<sup>Optional</sup> <a name="BackendBucketInput" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucketInput"></a>

```csharp
public string BackendBucketInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyValueInput`<sup>Optional</sup> <a name="KeyValueInput" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValueInput"></a>

```csharp
public string KeyValueInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BackendBucket`<sup>Required</sup> <a name="BackendBucket" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucket"></a>

```csharp
public string BackendBucket { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyValue`<sup>Required</sup> <a name="KeyValue" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValue"></a>

```csharp
public string KeyValue { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBackendBucketSignedUrlKeyConfig <a name="ComputeBackendBucketSignedUrlKeyConfig" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeBackendBucketSignedUrlKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BackendBucket,
    string KeyValue,
    string Name,
    string Id = null,
    string Project = null,
    ComputeBackendBucketSignedUrlKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.backendBucket">BackendBucket</a></code> | <code>string</code> | The backend bucket this signed URL key belongs. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.keyValue">KeyValue</a></code> | <code>string</code> | 128-bit key value used for signing the URL. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.name">Name</a></code> | <code>string</code> | Name of the signed URL key. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_backend_bucket_signed_url_key#id ComputeBackendBucketSignedUrlKey#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_backend_bucket_signed_url_key#project ComputeBackendBucketSignedUrlKey#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BackendBucket`<sup>Required</sup> <a name="BackendBucket" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.backendBucket"></a>

```csharp
public string BackendBucket { get; set; }
```

- *Type:* string

The backend bucket this signed URL key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_backend_bucket_signed_url_key#backend_bucket ComputeBackendBucketSignedUrlKey#backend_bucket}

---

##### `KeyValue`<sup>Required</sup> <a name="KeyValue" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.keyValue"></a>

```csharp
public string KeyValue { get; set; }
```

- *Type:* string

128-bit key value used for signing the URL.

The key value must be a
valid RFC 4648 Section 5 base64url encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_backend_bucket_signed_url_key#key_value ComputeBackendBucketSignedUrlKey#key_value}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the signed URL key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_backend_bucket_signed_url_key#name ComputeBackendBucketSignedUrlKey#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_backend_bucket_signed_url_key#id ComputeBackendBucketSignedUrlKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_backend_bucket_signed_url_key#project ComputeBackendBucketSignedUrlKey#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.timeouts"></a>

```csharp
public ComputeBackendBucketSignedUrlKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_backend_bucket_signed_url_key#timeouts ComputeBackendBucketSignedUrlKey#timeouts}

---

### ComputeBackendBucketSignedUrlKeyTimeouts <a name="ComputeBackendBucketSignedUrlKeyTimeouts" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeBackendBucketSignedUrlKeyTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_backend_bucket_signed_url_key#create ComputeBackendBucketSignedUrlKey#create}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_backend_bucket_signed_url_key#delete ComputeBackendBucketSignedUrlKey#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_backend_bucket_signed_url_key#create ComputeBackendBucketSignedUrlKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_backend_bucket_signed_url_key#delete ComputeBackendBucketSignedUrlKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference <a name="ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



