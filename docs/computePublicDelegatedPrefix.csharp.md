# `computePublicDelegatedPrefix` Submodule <a name="`computePublicDelegatedPrefix` Submodule" id="@cdktf/provider-google.computePublicDelegatedPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputePublicDelegatedPrefix <a name="ComputePublicDelegatedPrefix" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix google_compute_public_delegated_prefix}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePublicDelegatedPrefix(Construct Scope, string Id, ComputePublicDelegatedPrefixConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig">ComputePublicDelegatedPrefixConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig">ComputePublicDelegatedPrefixConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetIsLiveMigration">ResetIsLiveMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputePublicDelegatedPrefixTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts">ComputePublicDelegatedPrefixTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsLiveMigration` <a name="ResetIsLiveMigration" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetIsLiveMigration"></a>

```csharp
private void ResetIsLiveMigration()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputePublicDelegatedPrefix resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputePublicDelegatedPrefix.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputePublicDelegatedPrefix.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputePublicDelegatedPrefix.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputePublicDelegatedPrefix.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputePublicDelegatedPrefix resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputePublicDelegatedPrefix to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputePublicDelegatedPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputePublicDelegatedPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference">ComputePublicDelegatedPrefixTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.isLiveMigrationInput">IsLiveMigrationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.parentPrefixInput">ParentPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.isLiveMigration">IsLiveMigration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.parentPrefix">ParentPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.timeouts"></a>

```csharp
public ComputePublicDelegatedPrefixTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference">ComputePublicDelegatedPrefixTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.ipCidrRangeInput"></a>

```csharp
public string IpCidrRangeInput { get; }
```

- *Type:* string

---

##### `IsLiveMigrationInput`<sup>Optional</sup> <a name="IsLiveMigrationInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.isLiveMigrationInput"></a>

```csharp
public object IsLiveMigrationInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentPrefixInput`<sup>Optional</sup> <a name="ParentPrefixInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.parentPrefixInput"></a>

```csharp
public string ParentPrefixInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; }
```

- *Type:* string

---

##### `IsLiveMigration`<sup>Required</sup> <a name="IsLiveMigration" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.isLiveMigration"></a>

```csharp
public object IsLiveMigration { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentPrefix`<sup>Required</sup> <a name="ParentPrefix" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.parentPrefix"></a>

```csharp
public string ParentPrefix { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputePublicDelegatedPrefixConfig <a name="ComputePublicDelegatedPrefixConfig" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePublicDelegatedPrefixConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IpCidrRange,
    string Name,
    string ParentPrefix,
    string Region,
    string Description = null,
    string Id = null,
    object IsLiveMigration = null,
    string Project = null,
    ComputePublicDelegatedPrefixTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | The IPv4 address range, in CIDR format, represented by this public advertised prefix. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.parentPrefix">ParentPrefix</a></code> | <code>string</code> | The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.region">Region</a></code> | <code>string</code> | A region where the prefix will reside. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix#id ComputePublicDelegatedPrefix#id}. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.isLiveMigration">IsLiveMigration</a></code> | <code>object</code> | If true, the prefix will be live migrated. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix#project ComputePublicDelegatedPrefix#project}. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts">ComputePublicDelegatedPrefixTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; set; }
```

- *Type:* string

The IPv4 address range, in CIDR format, represented by this public advertised prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix#ip_cidr_range ComputePublicDelegatedPrefix#ip_cidr_range}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix#name ComputePublicDelegatedPrefix#name}

---

##### `ParentPrefix`<sup>Required</sup> <a name="ParentPrefix" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.parentPrefix"></a>

```csharp
public string ParentPrefix { get; set; }
```

- *Type:* string

The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix#parent_prefix ComputePublicDelegatedPrefix#parent_prefix}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

A region where the prefix will reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix#region ComputePublicDelegatedPrefix#region}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix#description ComputePublicDelegatedPrefix#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix#id ComputePublicDelegatedPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLiveMigration`<sup>Optional</sup> <a name="IsLiveMigration" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.isLiveMigration"></a>

```csharp
public object IsLiveMigration { get; set; }
```

- *Type:* object

If true, the prefix will be live migrated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix#is_live_migration ComputePublicDelegatedPrefix#is_live_migration}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix#project ComputePublicDelegatedPrefix#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.timeouts"></a>

```csharp
public ComputePublicDelegatedPrefixTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts">ComputePublicDelegatedPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix#timeouts ComputePublicDelegatedPrefix#timeouts}

---

### ComputePublicDelegatedPrefixTimeouts <a name="ComputePublicDelegatedPrefixTimeouts" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePublicDelegatedPrefixTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix#create ComputePublicDelegatedPrefix#create}. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix#delete ComputePublicDelegatedPrefix#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix#create ComputePublicDelegatedPrefix#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_public_delegated_prefix#delete ComputePublicDelegatedPrefix#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputePublicDelegatedPrefixTimeoutsOutputReference <a name="ComputePublicDelegatedPrefixTimeoutsOutputReference" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePublicDelegatedPrefixTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



