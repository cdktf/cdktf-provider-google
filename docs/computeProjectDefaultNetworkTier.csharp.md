# `computeProjectDefaultNetworkTier` Submodule <a name="`computeProjectDefaultNetworkTier` Submodule" id="@cdktf/provider-google.computeProjectDefaultNetworkTier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeProjectDefaultNetworkTier <a name="ComputeProjectDefaultNetworkTier" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/compute_project_default_network_tier google_compute_project_default_network_tier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeProjectDefaultNetworkTier(Construct Scope, string Id, ComputeProjectDefaultNetworkTierConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig">ComputeProjectDefaultNetworkTierConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig">ComputeProjectDefaultNetworkTierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeProjectDefaultNetworkTierTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeProjectDefaultNetworkTier resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeProjectDefaultNetworkTier.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeProjectDefaultNetworkTier.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeProjectDefaultNetworkTier.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeProjectDefaultNetworkTier.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeProjectDefaultNetworkTier resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeProjectDefaultNetworkTier to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeProjectDefaultNetworkTier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/compute_project_default_network_tier#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeProjectDefaultNetworkTier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference">ComputeProjectDefaultNetworkTierTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.networkTierInput">NetworkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.networkTier">NetworkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.timeouts"></a>

```csharp
public ComputeProjectDefaultNetworkTierTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference">ComputeProjectDefaultNetworkTierTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.networkTierInput"></a>

```csharp
public string NetworkTierInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.networkTier"></a>

```csharp
public string NetworkTier { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeProjectDefaultNetworkTierConfig <a name="ComputeProjectDefaultNetworkTierConfig" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeProjectDefaultNetworkTierConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string NetworkTier,
    string Id = null,
    string Project = null,
    ComputeProjectDefaultNetworkTierTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.networkTier">NetworkTier</a></code> | <code>string</code> | The default network tier to be configured for the project. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/compute_project_default_network_tier#id ComputeProjectDefaultNetworkTier#id}. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.networkTier"></a>

```csharp
public string NetworkTier { get; set; }
```

- *Type:* string

The default network tier to be configured for the project.

This field can take the following values: PREMIUM or STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/compute_project_default_network_tier#network_tier ComputeProjectDefaultNetworkTier#network_tier}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/compute_project_default_network_tier#id ComputeProjectDefaultNetworkTier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/compute_project_default_network_tier#project ComputeProjectDefaultNetworkTier#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.timeouts"></a>

```csharp
public ComputeProjectDefaultNetworkTierTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/compute_project_default_network_tier#timeouts ComputeProjectDefaultNetworkTier#timeouts}

---

### ComputeProjectDefaultNetworkTierTimeouts <a name="ComputeProjectDefaultNetworkTierTimeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeProjectDefaultNetworkTierTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/compute_project_default_network_tier#create ComputeProjectDefaultNetworkTier#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/compute_project_default_network_tier#create ComputeProjectDefaultNetworkTier#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeProjectDefaultNetworkTierTimeoutsOutputReference <a name="ComputeProjectDefaultNetworkTierTimeoutsOutputReference" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeProjectDefaultNetworkTierTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



