# `computePublicAdvertisedPrefix` Submodule <a name="`computePublicAdvertisedPrefix` Submodule" id="@cdktf/provider-google.computePublicAdvertisedPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputePublicAdvertisedPrefix <a name="ComputePublicAdvertisedPrefix" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_public_advertised_prefix google_compute_public_advertised_prefix}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePublicAdvertisedPrefix(Construct Scope, string Id, ComputePublicAdvertisedPrefixConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig">ComputePublicAdvertisedPrefixConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig">ComputePublicAdvertisedPrefixConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetPdpScope">ResetPdpScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputePublicAdvertisedPrefixTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPdpScope` <a name="ResetPdpScope" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetPdpScope"></a>

```csharp
private void ResetPdpScope()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputePublicAdvertisedPrefix resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputePublicAdvertisedPrefix.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputePublicAdvertisedPrefix.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputePublicAdvertisedPrefix.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputePublicAdvertisedPrefix.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputePublicAdvertisedPrefix resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputePublicAdvertisedPrefix to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputePublicAdvertisedPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_public_advertised_prefix#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputePublicAdvertisedPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.sharedSecret">SharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference">ComputePublicAdvertisedPrefixTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dnsVerificationIpInput">DnsVerificationIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.pdpScopeInput">PdpScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dnsVerificationIp">DnsVerificationIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.pdpScope">PdpScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.sharedSecret"></a>

```csharp
public string SharedSecret { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.timeouts"></a>

```csharp
public ComputePublicAdvertisedPrefixTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference">ComputePublicAdvertisedPrefixTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DnsVerificationIpInput`<sup>Optional</sup> <a name="DnsVerificationIpInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dnsVerificationIpInput"></a>

```csharp
public string DnsVerificationIpInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.ipCidrRangeInput"></a>

```csharp
public string IpCidrRangeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PdpScopeInput`<sup>Optional</sup> <a name="PdpScopeInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.pdpScopeInput"></a>

```csharp
public string PdpScopeInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DnsVerificationIp`<sup>Required</sup> <a name="DnsVerificationIp" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.dnsVerificationIp"></a>

```csharp
public string DnsVerificationIp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PdpScope`<sup>Required</sup> <a name="PdpScope" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.pdpScope"></a>

```csharp
public string PdpScope { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefix.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputePublicAdvertisedPrefixConfig <a name="ComputePublicAdvertisedPrefixConfig" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePublicAdvertisedPrefixConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DnsVerificationIp,
    string IpCidrRange,
    string Name,
    string Description = null,
    string Id = null,
    string PdpScope = null,
    string Project = null,
    ComputePublicAdvertisedPrefixTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.dnsVerificationIp">DnsVerificationIp</a></code> | <code>string</code> | The IPv4 address to be used for reverse DNS verification. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | The address range, in CIDR format, represented by this public advertised prefix. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_public_advertised_prefix#id ComputePublicAdvertisedPrefix#id}. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.pdpScope">PdpScope</a></code> | <code>string</code> | Specifies how child public delegated prefix will be scoped. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_public_advertised_prefix#project ComputePublicAdvertisedPrefix#project}. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DnsVerificationIp`<sup>Required</sup> <a name="DnsVerificationIp" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.dnsVerificationIp"></a>

```csharp
public string DnsVerificationIp { get; set; }
```

- *Type:* string

The IPv4 address to be used for reverse DNS verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_public_advertised_prefix#dns_verification_ip ComputePublicAdvertisedPrefix#dns_verification_ip}

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; set; }
```

- *Type:* string

The address range, in CIDR format, represented by this public advertised prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_public_advertised_prefix#ip_cidr_range ComputePublicAdvertisedPrefix#ip_cidr_range}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_public_advertised_prefix#name ComputePublicAdvertisedPrefix#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_public_advertised_prefix#description ComputePublicAdvertisedPrefix#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_public_advertised_prefix#id ComputePublicAdvertisedPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PdpScope`<sup>Optional</sup> <a name="PdpScope" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.pdpScope"></a>

```csharp
public string PdpScope { get; set; }
```

- *Type:* string

Specifies how child public delegated prefix will be scoped.

pdpScope
must be one of: GLOBAL, REGIONAL

* REGIONAL: The public delegated prefix is regional only. The
  provisioning will take a few minutes.
* GLOBAL: The public delegated prefix is global only. The provisioning
  will take ~4 weeks. Possible values: ["GLOBAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_public_advertised_prefix#pdp_scope ComputePublicAdvertisedPrefix#pdp_scope}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_public_advertised_prefix#project ComputePublicAdvertisedPrefix#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixConfig.property.timeouts"></a>

```csharp
public ComputePublicAdvertisedPrefixTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts">ComputePublicAdvertisedPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_public_advertised_prefix#timeouts ComputePublicAdvertisedPrefix#timeouts}

---

### ComputePublicAdvertisedPrefixTimeouts <a name="ComputePublicAdvertisedPrefixTimeouts" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePublicAdvertisedPrefixTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_public_advertised_prefix#create ComputePublicAdvertisedPrefix#create}. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_public_advertised_prefix#delete ComputePublicAdvertisedPrefix#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_public_advertised_prefix#create ComputePublicAdvertisedPrefix#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/compute_public_advertised_prefix#delete ComputePublicAdvertisedPrefix#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputePublicAdvertisedPrefixTimeoutsOutputReference <a name="ComputePublicAdvertisedPrefixTimeoutsOutputReference" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputePublicAdvertisedPrefixTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePublicAdvertisedPrefix.ComputePublicAdvertisedPrefixTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



