# `chronicleRetrohunt` Submodule <a name="`chronicleRetrohunt` Submodule" id="@cdktf/provider-google.chronicleRetrohunt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleRetrohunt <a name="ChronicleRetrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt google_chronicle_retrohunt}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleRetrohunt(Construct Scope, string Id, ChronicleRetrohuntConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig">ChronicleRetrohuntConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig">ChronicleRetrohuntConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putProcessInterval">PutProcessInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetRetrohunt">ResetRetrohunt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProcessInterval` <a name="PutProcessInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putProcessInterval"></a>

```csharp
private void PutProcessInterval(ChronicleRetrohuntProcessInterval Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putProcessInterval.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putTimeouts"></a>

```csharp
private void PutTimeouts(ChronicleRetrohuntTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRetrohunt` <a name="ResetRetrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetRetrohunt"></a>

```csharp
private void ResetRetrohunt()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ChronicleRetrohunt resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ChronicleRetrohunt.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ChronicleRetrohunt.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ChronicleRetrohunt.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ChronicleRetrohunt.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ChronicleRetrohunt resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleRetrohunt to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleRetrohunt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ChronicleRetrohunt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.executionInterval">ExecutionInterval</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList">ChronicleRetrohuntExecutionIntervalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.processInterval">ProcessInterval</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference">ChronicleRetrohuntProcessIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.progressPercentage">ProgressPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference">ChronicleRetrohuntTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.processIntervalInput">ProcessIntervalInput</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.retrohuntInput">RetrohuntInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.ruleInput">RuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.retrohunt">Retrohunt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.rule">Rule</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ExecutionInterval`<sup>Required</sup> <a name="ExecutionInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.executionInterval"></a>

```csharp
public ChronicleRetrohuntExecutionIntervalList ExecutionInterval { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList">ChronicleRetrohuntExecutionIntervalList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProcessInterval`<sup>Required</sup> <a name="ProcessInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.processInterval"></a>

```csharp
public ChronicleRetrohuntProcessIntervalOutputReference ProcessInterval { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference">ChronicleRetrohuntProcessIntervalOutputReference</a>

---

##### `ProgressPercentage`<sup>Required</sup> <a name="ProgressPercentage" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.progressPercentage"></a>

```csharp
public double ProgressPercentage { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.timeouts"></a>

```csharp
public ChronicleRetrohuntTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference">ChronicleRetrohuntTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProcessIntervalInput`<sup>Optional</sup> <a name="ProcessIntervalInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.processIntervalInput"></a>

```csharp
public ChronicleRetrohuntProcessInterval ProcessIntervalInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RetrohuntInput`<sup>Optional</sup> <a name="RetrohuntInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.retrohuntInput"></a>

```csharp
public string RetrohuntInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.ruleInput"></a>

```csharp
public string RuleInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Retrohunt`<sup>Required</sup> <a name="Retrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.retrohunt"></a>

```csharp
public string Retrohunt { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.rule"></a>

```csharp
public string Rule { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleRetrohuntConfig <a name="ChronicleRetrohuntConfig" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleRetrohuntConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Instance,
    string Location,
    ChronicleRetrohuntProcessInterval ProcessInterval,
    string Rule,
    string Id = null,
    string Project = null,
    string Retrohunt = null,
    ChronicleRetrohuntTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.instance">Instance</a></code> | <code>string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.processInterval">ProcessInterval</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a></code> | process_interval block. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.rule">Rule</a></code> | <code>string</code> | The Rule ID of the rule. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#id ChronicleRetrohunt#id}. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#project ChronicleRetrohunt#project}. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.retrohunt">Retrohunt</a></code> | <code>string</code> | The retrohunt ID of the Retrohunt. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#instance ChronicleRetrohunt#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#location ChronicleRetrohunt#location}

---

##### `ProcessInterval`<sup>Required</sup> <a name="ProcessInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.processInterval"></a>

```csharp
public ChronicleRetrohuntProcessInterval ProcessInterval { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

process_interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#process_interval ChronicleRetrohunt#process_interval}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.rule"></a>

```csharp
public string Rule { get; set; }
```

- *Type:* string

The Rule ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#rule ChronicleRetrohunt#rule}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#id ChronicleRetrohunt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#project ChronicleRetrohunt#project}.

---

##### `Retrohunt`<sup>Optional</sup> <a name="Retrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.retrohunt"></a>

```csharp
public string Retrohunt { get; set; }
```

- *Type:* string

The retrohunt ID of the Retrohunt.

A retrohunt is an execution of a Rule over a time range in the past.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#retrohunt ChronicleRetrohunt#retrohunt}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.timeouts"></a>

```csharp
public ChronicleRetrohuntTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#timeouts ChronicleRetrohunt#timeouts}

---

### ChronicleRetrohuntExecutionInterval <a name="ChronicleRetrohuntExecutionInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionInterval.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleRetrohuntExecutionInterval {

};
```


### ChronicleRetrohuntProcessInterval <a name="ChronicleRetrohuntProcessInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleRetrohuntProcessInterval {
    string EndTime,
    string StartTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.property.endTime">EndTime</a></code> | <code>string</code> | Exclusive end of the interval. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.property.startTime">StartTime</a></code> | <code>string</code> | Inclusive start of the interval. |

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Exclusive end of the interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#end_time ChronicleRetrohunt#end_time}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Inclusive start of the interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#start_time ChronicleRetrohunt#start_time}

---

### ChronicleRetrohuntTimeouts <a name="ChronicleRetrohuntTimeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleRetrohuntTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#create ChronicleRetrohunt#create}. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#delete ChronicleRetrohunt#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#create ChronicleRetrohunt#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/chronicle_retrohunt#delete ChronicleRetrohunt#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleRetrohuntExecutionIntervalList <a name="ChronicleRetrohuntExecutionIntervalList" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleRetrohuntExecutionIntervalList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.get"></a>

```csharp
private ChronicleRetrohuntExecutionIntervalOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ChronicleRetrohuntExecutionIntervalOutputReference <a name="ChronicleRetrohuntExecutionIntervalOutputReference" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleRetrohuntExecutionIntervalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionInterval">ChronicleRetrohuntExecutionInterval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.internalValue"></a>

```csharp
public ChronicleRetrohuntExecutionInterval InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionInterval">ChronicleRetrohuntExecutionInterval</a>

---


### ChronicleRetrohuntProcessIntervalOutputReference <a name="ChronicleRetrohuntProcessIntervalOutputReference" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleRetrohuntProcessIntervalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.internalValue"></a>

```csharp
public ChronicleRetrohuntProcessInterval InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

---


### ChronicleRetrohuntTimeoutsOutputReference <a name="ChronicleRetrohuntTimeoutsOutputReference" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleRetrohuntTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



