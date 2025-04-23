# `computeProjectCloudArmorTier` Submodule <a name="`computeProjectCloudArmorTier` Submodule" id="@cdktf/provider-google.computeProjectCloudArmorTier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeProjectCloudArmorTier <a name="ComputeProjectCloudArmorTier" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_project_cloud_armor_tier google_compute_project_cloud_armor_tier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeProjectCloudArmorTier(Construct Scope, string Id, ComputeProjectCloudArmorTierConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig">ComputeProjectCloudArmorTierConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig">ComputeProjectCloudArmorTierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeProjectCloudArmorTierTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts">ComputeProjectCloudArmorTierTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeProjectCloudArmorTier resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeProjectCloudArmorTier.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeProjectCloudArmorTier.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeProjectCloudArmorTier.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeProjectCloudArmorTier.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeProjectCloudArmorTier resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeProjectCloudArmorTier to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeProjectCloudArmorTier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_project_cloud_armor_tier#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeProjectCloudArmorTier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference">ComputeProjectCloudArmorTierTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.cloudArmorTierInput">CloudArmorTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.cloudArmorTier">CloudArmorTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.timeouts"></a>

```csharp
public ComputeProjectCloudArmorTierTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference">ComputeProjectCloudArmorTierTimeoutsOutputReference</a>

---

##### `CloudArmorTierInput`<sup>Optional</sup> <a name="CloudArmorTierInput" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.cloudArmorTierInput"></a>

```csharp
public string CloudArmorTierInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CloudArmorTier`<sup>Required</sup> <a name="CloudArmorTier" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.cloudArmorTier"></a>

```csharp
public string CloudArmorTier { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTier.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeProjectCloudArmorTierConfig <a name="ComputeProjectCloudArmorTierConfig" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeProjectCloudArmorTierConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CloudArmorTier,
    string Id = null,
    string Project = null,
    ComputeProjectCloudArmorTierTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.cloudArmorTier">CloudArmorTier</a></code> | <code>string</code> | Managed protection tier to be set. Possible values: ["CA_STANDARD", "CA_ENTERPRISE_PAYGO", "CA_ENTERPRISE_ANNUAL"]. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_project_cloud_armor_tier#id ComputeProjectCloudArmorTier#id}. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_project_cloud_armor_tier#project ComputeProjectCloudArmorTier#project}. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts">ComputeProjectCloudArmorTierTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CloudArmorTier`<sup>Required</sup> <a name="CloudArmorTier" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.cloudArmorTier"></a>

```csharp
public string CloudArmorTier { get; set; }
```

- *Type:* string

Managed protection tier to be set. Possible values: ["CA_STANDARD", "CA_ENTERPRISE_PAYGO", "CA_ENTERPRISE_ANNUAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_project_cloud_armor_tier#cloud_armor_tier ComputeProjectCloudArmorTier#cloud_armor_tier}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_project_cloud_armor_tier#id ComputeProjectCloudArmorTier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_project_cloud_armor_tier#project ComputeProjectCloudArmorTier#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierConfig.property.timeouts"></a>

```csharp
public ComputeProjectCloudArmorTierTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts">ComputeProjectCloudArmorTierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_project_cloud_armor_tier#timeouts ComputeProjectCloudArmorTier#timeouts}

---

### ComputeProjectCloudArmorTierTimeouts <a name="ComputeProjectCloudArmorTierTimeouts" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeProjectCloudArmorTierTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_project_cloud_armor_tier#create ComputeProjectCloudArmorTier#create}. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_project_cloud_armor_tier#delete ComputeProjectCloudArmorTier#delete}. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_project_cloud_armor_tier#update ComputeProjectCloudArmorTier#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_project_cloud_armor_tier#create ComputeProjectCloudArmorTier#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_project_cloud_armor_tier#delete ComputeProjectCloudArmorTier#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_project_cloud_armor_tier#update ComputeProjectCloudArmorTier#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeProjectCloudArmorTierTimeoutsOutputReference <a name="ComputeProjectCloudArmorTierTimeoutsOutputReference" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeProjectCloudArmorTierTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeProjectCloudArmorTier.ComputeProjectCloudArmorTierTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



