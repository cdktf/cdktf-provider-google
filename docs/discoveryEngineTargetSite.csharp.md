# `discoveryEngineTargetSite` Submodule <a name="`discoveryEngineTargetSite` Submodule" id="@cdktf/provider-google.discoveryEngineTargetSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineTargetSite <a name="DiscoveryEngineTargetSite" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/discovery_engine_target_site google_discovery_engine_target_site}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineTargetSite(Construct Scope, string Id, DiscoveryEngineTargetSiteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig">DiscoveryEngineTargetSiteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig">DiscoveryEngineTargetSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetExactMatch">ResetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.putTimeouts"></a>

```csharp
private void PutTimeouts(DiscoveryEngineTargetSiteTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts">DiscoveryEngineTargetSiteTimeouts</a>

---

##### `ResetExactMatch` <a name="ResetExactMatch" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetExactMatch"></a>

```csharp
private void ResetExactMatch()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DiscoveryEngineTargetSite resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DiscoveryEngineTargetSite.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DiscoveryEngineTargetSite.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DiscoveryEngineTargetSite.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DiscoveryEngineTargetSite.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DiscoveryEngineTargetSite resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineTargetSite to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineTargetSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/discovery_engine_target_site#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineTargetSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.failureReason">FailureReason</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList">DiscoveryEngineTargetSiteFailureReasonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.generatedUriPattern">GeneratedUriPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.indexingStatus">IndexingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.rootDomainUri">RootDomainUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.siteVerificationInfo">SiteVerificationInfo</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList">DiscoveryEngineTargetSiteSiteVerificationInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.targetSiteId">TargetSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference">DiscoveryEngineTargetSiteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.dataStoreIdInput">DataStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.exactMatchInput">ExactMatchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.providedUriPatternInput">ProvidedUriPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.dataStoreId">DataStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.exactMatch">ExactMatch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.providedUriPattern">ProvidedUriPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.failureReason"></a>

```csharp
public DiscoveryEngineTargetSiteFailureReasonList FailureReason { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList">DiscoveryEngineTargetSiteFailureReasonList</a>

---

##### `GeneratedUriPattern`<sup>Required</sup> <a name="GeneratedUriPattern" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.generatedUriPattern"></a>

```csharp
public string GeneratedUriPattern { get; }
```

- *Type:* string

---

##### `IndexingStatus`<sup>Required</sup> <a name="IndexingStatus" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.indexingStatus"></a>

```csharp
public string IndexingStatus { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RootDomainUri`<sup>Required</sup> <a name="RootDomainUri" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.rootDomainUri"></a>

```csharp
public string RootDomainUri { get; }
```

- *Type:* string

---

##### `SiteVerificationInfo`<sup>Required</sup> <a name="SiteVerificationInfo" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.siteVerificationInfo"></a>

```csharp
public DiscoveryEngineTargetSiteSiteVerificationInfoList SiteVerificationInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList">DiscoveryEngineTargetSiteSiteVerificationInfoList</a>

---

##### `TargetSiteId`<sup>Required</sup> <a name="TargetSiteId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.targetSiteId"></a>

```csharp
public string TargetSiteId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.timeouts"></a>

```csharp
public DiscoveryEngineTargetSiteTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference">DiscoveryEngineTargetSiteTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DataStoreIdInput`<sup>Optional</sup> <a name="DataStoreIdInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.dataStoreIdInput"></a>

```csharp
public string DataStoreIdInput { get; }
```

- *Type:* string

---

##### `ExactMatchInput`<sup>Optional</sup> <a name="ExactMatchInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.exactMatchInput"></a>

```csharp
public object ExactMatchInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProvidedUriPatternInput`<sup>Optional</sup> <a name="ProvidedUriPatternInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.providedUriPatternInput"></a>

```csharp
public string ProvidedUriPatternInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DataStoreId`<sup>Required</sup> <a name="DataStoreId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.dataStoreId"></a>

```csharp
public string DataStoreId { get; }
```

- *Type:* string

---

##### `ExactMatch`<sup>Required</sup> <a name="ExactMatch" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.exactMatch"></a>

```csharp
public object ExactMatch { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProvidedUriPattern`<sup>Required</sup> <a name="ProvidedUriPattern" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.providedUriPattern"></a>

```csharp
public string ProvidedUriPattern { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineTargetSiteConfig <a name="DiscoveryEngineTargetSiteConfig" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineTargetSiteConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataStoreId,
    string Location,
    string ProvidedUriPattern,
    object ExactMatch = null,
    string Id = null,
    string Project = null,
    DiscoveryEngineTargetSiteTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.dataStoreId">DataStoreId</a></code> | <code>string</code> | The unique id of the data store. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.providedUriPattern">ProvidedUriPattern</a></code> | <code>string</code> | The user provided URI pattern from which the 'generated_uri_pattern' is generated. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.exactMatch">ExactMatch</a></code> | <code>object</code> | If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/discovery_engine_target_site#id DiscoveryEngineTargetSite#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/discovery_engine_target_site#project DiscoveryEngineTargetSite#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts">DiscoveryEngineTargetSiteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.type">Type</a></code> | <code>string</code> | The possible target site types. Possible values: ["INCLUDE", "EXCLUDE"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataStoreId`<sup>Required</sup> <a name="DataStoreId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.dataStoreId"></a>

```csharp
public string DataStoreId { get; set; }
```

- *Type:* string

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/discovery_engine_target_site#data_store_id DiscoveryEngineTargetSite#data_store_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/discovery_engine_target_site#location DiscoveryEngineTargetSite#location}

---

##### `ProvidedUriPattern`<sup>Required</sup> <a name="ProvidedUriPattern" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.providedUriPattern"></a>

```csharp
public string ProvidedUriPattern { get; set; }
```

- *Type:* string

The user provided URI pattern from which the 'generated_uri_pattern' is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/discovery_engine_target_site#provided_uri_pattern DiscoveryEngineTargetSite#provided_uri_pattern}

---

##### `ExactMatch`<sup>Optional</sup> <a name="ExactMatch" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.exactMatch"></a>

```csharp
public object ExactMatch { get; set; }
```

- *Type:* object

If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern.

If set to true, an uri_pattern
is generated to try to be an exact match of the provided_uri_pattern or
just the specific page if the provided_uri_pattern is a specific one.
provided_uri_pattern is always normalized to generate the URI pattern to
be used by the search engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/discovery_engine_target_site#exact_match DiscoveryEngineTargetSite#exact_match}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/discovery_engine_target_site#id DiscoveryEngineTargetSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/discovery_engine_target_site#project DiscoveryEngineTargetSite#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.timeouts"></a>

```csharp
public DiscoveryEngineTargetSiteTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts">DiscoveryEngineTargetSiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/discovery_engine_target_site#timeouts DiscoveryEngineTargetSite#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The possible target site types. Possible values: ["INCLUDE", "EXCLUDE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/discovery_engine_target_site#type DiscoveryEngineTargetSite#type}

---

### DiscoveryEngineTargetSiteFailureReason <a name="DiscoveryEngineTargetSiteFailureReason" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReason"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReason.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineTargetSiteFailureReason {

};
```


### DiscoveryEngineTargetSiteFailureReasonQuotaFailure <a name="DiscoveryEngineTargetSiteFailureReasonQuotaFailure" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineTargetSiteFailureReasonQuotaFailure {

};
```


### DiscoveryEngineTargetSiteSiteVerificationInfo <a name="DiscoveryEngineTargetSiteSiteVerificationInfo" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineTargetSiteSiteVerificationInfo {

};
```


### DiscoveryEngineTargetSiteTimeouts <a name="DiscoveryEngineTargetSiteTimeouts" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineTargetSiteTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/discovery_engine_target_site#create DiscoveryEngineTargetSite#create}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/discovery_engine_target_site#delete DiscoveryEngineTargetSite#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/discovery_engine_target_site#create DiscoveryEngineTargetSite#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/discovery_engine_target_site#delete DiscoveryEngineTargetSite#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineTargetSiteFailureReasonList <a name="DiscoveryEngineTargetSiteFailureReasonList" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineTargetSiteFailureReasonList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.get"></a>

```csharp
private DiscoveryEngineTargetSiteFailureReasonOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DiscoveryEngineTargetSiteFailureReasonOutputReference <a name="DiscoveryEngineTargetSiteFailureReasonOutputReference" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineTargetSiteFailureReasonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.property.quotaFailure">QuotaFailure</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList">DiscoveryEngineTargetSiteFailureReasonQuotaFailureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReason">DiscoveryEngineTargetSiteFailureReason</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QuotaFailure`<sup>Required</sup> <a name="QuotaFailure" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.property.quotaFailure"></a>

```csharp
public DiscoveryEngineTargetSiteFailureReasonQuotaFailureList QuotaFailure { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList">DiscoveryEngineTargetSiteFailureReasonQuotaFailureList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineTargetSiteFailureReason InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReason">DiscoveryEngineTargetSiteFailureReason</a>

---


### DiscoveryEngineTargetSiteFailureReasonQuotaFailureList <a name="DiscoveryEngineTargetSiteFailureReasonQuotaFailureList" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineTargetSiteFailureReasonQuotaFailureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.get"></a>

```csharp
private DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference <a name="DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.totalRequiredQuota">TotalRequiredQuota</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailure">DiscoveryEngineTargetSiteFailureReasonQuotaFailure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TotalRequiredQuota`<sup>Required</sup> <a name="TotalRequiredQuota" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.totalRequiredQuota"></a>

```csharp
public double TotalRequiredQuota { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineTargetSiteFailureReasonQuotaFailure InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailure">DiscoveryEngineTargetSiteFailureReasonQuotaFailure</a>

---


### DiscoveryEngineTargetSiteSiteVerificationInfoList <a name="DiscoveryEngineTargetSiteSiteVerificationInfoList" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineTargetSiteSiteVerificationInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.get"></a>

```csharp
private DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference <a name="DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.siteVerificationState">SiteVerificationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.verifyTime">VerifyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfo">DiscoveryEngineTargetSiteSiteVerificationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SiteVerificationState`<sup>Required</sup> <a name="SiteVerificationState" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.siteVerificationState"></a>

```csharp
public string SiteVerificationState { get; }
```

- *Type:* string

---

##### `VerifyTime`<sup>Required</sup> <a name="VerifyTime" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.verifyTime"></a>

```csharp
public string VerifyTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineTargetSiteSiteVerificationInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfo">DiscoveryEngineTargetSiteSiteVerificationInfo</a>

---


### DiscoveryEngineTargetSiteTimeoutsOutputReference <a name="DiscoveryEngineTargetSiteTimeoutsOutputReference" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineTargetSiteTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



