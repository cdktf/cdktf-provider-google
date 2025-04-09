# `chronicleDataAccessScope` Submodule <a name="`chronicleDataAccessScope` Submodule" id="@cdktf/provider-google.chronicleDataAccessScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleDataAccessScope <a name="ChronicleDataAccessScope" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope google_chronicle_data_access_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleDataAccessScope(Construct Scope, string Id, ChronicleDataAccessScopeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig">ChronicleDataAccessScopeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig">ChronicleDataAccessScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putAllowedDataAccessLabels">PutAllowedDataAccessLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putDeniedDataAccessLabels">PutDeniedDataAccessLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetAllowAll">ResetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetAllowedDataAccessLabels">ResetAllowedDataAccessLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetDeniedDataAccessLabels">ResetDeniedDataAccessLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllowedDataAccessLabels` <a name="PutAllowedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putAllowedDataAccessLabels"></a>

```csharp
private void PutAllowedDataAccessLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putAllowedDataAccessLabels.parameter.value"></a>

- *Type:* object

---

##### `PutDeniedDataAccessLabels` <a name="PutDeniedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putDeniedDataAccessLabels"></a>

```csharp
private void PutDeniedDataAccessLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putDeniedDataAccessLabels.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putTimeouts"></a>

```csharp
private void PutTimeouts(ChronicleDataAccessScopeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a>

---

##### `ResetAllowAll` <a name="ResetAllowAll" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetAllowAll"></a>

```csharp
private void ResetAllowAll()
```

##### `ResetAllowedDataAccessLabels` <a name="ResetAllowedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetAllowedDataAccessLabels"></a>

```csharp
private void ResetAllowedDataAccessLabels()
```

##### `ResetDeniedDataAccessLabels` <a name="ResetDeniedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetDeniedDataAccessLabels"></a>

```csharp
private void ResetDeniedDataAccessLabels()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ChronicleDataAccessScope resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ChronicleDataAccessScope.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ChronicleDataAccessScope.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ChronicleDataAccessScope.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ChronicleDataAccessScope.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ChronicleDataAccessScope resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleDataAccessScope to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleDataAccessScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ChronicleDataAccessScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowedDataAccessLabels">AllowedDataAccessLabels</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList">ChronicleDataAccessScopeAllowedDataAccessLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.author">Author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.deniedDataAccessLabels">DeniedDataAccessLabels</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList">ChronicleDataAccessScopeDeniedDataAccessLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.lastEditor">LastEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference">ChronicleDataAccessScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowAllInput">AllowAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowedDataAccessLabelsInput">AllowedDataAccessLabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dataAccessScopeIdInput">DataAccessScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.deniedDataAccessLabelsInput">DeniedDataAccessLabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowAll">AllowAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dataAccessScopeId">DataAccessScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowedDataAccessLabels`<sup>Required</sup> <a name="AllowedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowedDataAccessLabels"></a>

```csharp
public ChronicleDataAccessScopeAllowedDataAccessLabelsList AllowedDataAccessLabels { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList">ChronicleDataAccessScopeAllowedDataAccessLabelsList</a>

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.author"></a>

```csharp
public string Author { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeniedDataAccessLabels`<sup>Required</sup> <a name="DeniedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.deniedDataAccessLabels"></a>

```csharp
public ChronicleDataAccessScopeDeniedDataAccessLabelsList DeniedDataAccessLabels { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList">ChronicleDataAccessScopeDeniedDataAccessLabelsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `LastEditor`<sup>Required</sup> <a name="LastEditor" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.lastEditor"></a>

```csharp
public string LastEditor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.timeouts"></a>

```csharp
public ChronicleDataAccessScopeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference">ChronicleDataAccessScopeTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AllowAllInput`<sup>Optional</sup> <a name="AllowAllInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowAllInput"></a>

```csharp
public object AllowAllInput { get; }
```

- *Type:* object

---

##### `AllowedDataAccessLabelsInput`<sup>Optional</sup> <a name="AllowedDataAccessLabelsInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowedDataAccessLabelsInput"></a>

```csharp
public object AllowedDataAccessLabelsInput { get; }
```

- *Type:* object

---

##### `DataAccessScopeIdInput`<sup>Optional</sup> <a name="DataAccessScopeIdInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dataAccessScopeIdInput"></a>

```csharp
public string DataAccessScopeIdInput { get; }
```

- *Type:* string

---

##### `DeniedDataAccessLabelsInput`<sup>Optional</sup> <a name="DeniedDataAccessLabelsInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.deniedDataAccessLabelsInput"></a>

```csharp
public object DeniedDataAccessLabelsInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AllowAll`<sup>Required</sup> <a name="AllowAll" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowAll"></a>

```csharp
public object AllowAll { get; }
```

- *Type:* object

---

##### `DataAccessScopeId`<sup>Required</sup> <a name="DataAccessScopeId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dataAccessScopeId"></a>

```csharp
public string DataAccessScopeId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleDataAccessScopeAllowedDataAccessLabels <a name="ChronicleDataAccessScopeAllowedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleDataAccessScopeAllowedDataAccessLabels {
    string AssetNamespace = null,
    string DataAccessLabel = null,
    ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel IngestionLabel = null,
    string LogType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.assetNamespace">AssetNamespace</a></code> | <code>string</code> | The asset namespace configured in the forwarder of the customer's events. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.dataAccessLabel">DataAccessLabel</a></code> | <code>string</code> | The name of the data access label. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.ingestionLabel">IngestionLabel</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | ingestion_label block. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.logType">LogType</a></code> | <code>string</code> | The name of the log type. |

---

##### `AssetNamespace`<sup>Optional</sup> <a name="AssetNamespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.assetNamespace"></a>

```csharp
public string AssetNamespace { get; set; }
```

- *Type:* string

The asset namespace configured in the forwarder of the customer's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#asset_namespace ChronicleDataAccessScope#asset_namespace}

---

##### `DataAccessLabel`<sup>Optional</sup> <a name="DataAccessLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.dataAccessLabel"></a>

```csharp
public string DataAccessLabel { get; set; }
```

- *Type:* string

The name of the data access label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#data_access_label ChronicleDataAccessScope#data_access_label}

---

##### `IngestionLabel`<sup>Optional</sup> <a name="IngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.ingestionLabel"></a>

```csharp
public ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel IngestionLabel { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

ingestion_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#ingestion_label ChronicleDataAccessScope#ingestion_label}

---

##### `LogType`<sup>Optional</sup> <a name="LogType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.logType"></a>

```csharp
public string LogType { get; set; }
```

- *Type:* string

The name of the log type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#log_type ChronicleDataAccessScope#log_type}

---

### ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel <a name="ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel {
    string IngestionLabelKey,
    string IngestionLabelValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelKey">IngestionLabelKey</a></code> | <code>string</code> | Required. The key of the ingestion label. Always required. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelValue">IngestionLabelValue</a></code> | <code>string</code> | Optional. |

---

##### `IngestionLabelKey`<sup>Required</sup> <a name="IngestionLabelKey" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelKey"></a>

```csharp
public string IngestionLabelKey { get; set; }
```

- *Type:* string

Required. The key of the ingestion label. Always required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#ingestion_label_key ChronicleDataAccessScope#ingestion_label_key}

---

##### `IngestionLabelValue`<sup>Optional</sup> <a name="IngestionLabelValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelValue"></a>

```csharp
public string IngestionLabelValue { get; set; }
```

- *Type:* string

Optional.

The value of the ingestion label. Optional. An object
with no provided value and some key provided would match
against the given key and ANY value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#ingestion_label_value ChronicleDataAccessScope#ingestion_label_value}

---

### ChronicleDataAccessScopeConfig <a name="ChronicleDataAccessScopeConfig" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleDataAccessScopeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataAccessScopeId,
    string Instance,
    string Location,
    object AllowAll = null,
    object AllowedDataAccessLabels = null,
    object DeniedDataAccessLabels = null,
    string Description = null,
    string Id = null,
    string Project = null,
    ChronicleDataAccessScopeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.dataAccessScopeId">DataAccessScopeId</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.instance">Instance</a></code> | <code>string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.allowAll">AllowAll</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.allowedDataAccessLabels">AllowedDataAccessLabels</a></code> | <code>object</code> | allowed_data_access_labels block. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.deniedDataAccessLabels">DeniedDataAccessLabels</a></code> | <code>object</code> | denied_data_access_labels block. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.description">Description</a></code> | <code>string</code> | Optional. A description of the data access scope for a human reader. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#id ChronicleDataAccessScope#id}. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#project ChronicleDataAccessScope#project}. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataAccessScopeId`<sup>Required</sup> <a name="DataAccessScopeId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.dataAccessScopeId"></a>

```csharp
public string DataAccessScopeId { get; set; }
```

- *Type:* string

Required.

The user provided scope id which will become the last part of the name
of the scope resource.
Needs to be compliant with https://google.aip.dev/122

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#data_access_scope_id ChronicleDataAccessScope#data_access_scope_id}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#instance ChronicleDataAccessScope#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#location ChronicleDataAccessScope#location}

---

##### `AllowAll`<sup>Optional</sup> <a name="AllowAll" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.allowAll"></a>

```csharp
public object AllowAll { get; set; }
```

- *Type:* object

Optional.

Whether or not the scope allows all labels, allow_all and
allowed_data_access_labels are mutually exclusive and one of them must be
present. denied_data_access_labels can still be used along with allow_all.
When combined with denied_data_access_labels, access will be granted to all
data that doesn't have labels mentioned in denied_data_access_labels. E.g.:
A customer with scope with denied labels A and B and allow_all will be able
to see all data except data labeled with A and data labeled with B and data
with labels A and B.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#allow_all ChronicleDataAccessScope#allow_all}

---

##### `AllowedDataAccessLabels`<sup>Optional</sup> <a name="AllowedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.allowedDataAccessLabels"></a>

```csharp
public object AllowedDataAccessLabels { get; set; }
```

- *Type:* object

allowed_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#allowed_data_access_labels ChronicleDataAccessScope#allowed_data_access_labels}

---

##### `DeniedDataAccessLabels`<sup>Optional</sup> <a name="DeniedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.deniedDataAccessLabels"></a>

```csharp
public object DeniedDataAccessLabels { get; set; }
```

- *Type:* object

denied_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#denied_data_access_labels ChronicleDataAccessScope#denied_data_access_labels}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. A description of the data access scope for a human reader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#description ChronicleDataAccessScope#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#id ChronicleDataAccessScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#project ChronicleDataAccessScope#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.timeouts"></a>

```csharp
public ChronicleDataAccessScopeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#timeouts ChronicleDataAccessScope#timeouts}

---

### ChronicleDataAccessScopeDeniedDataAccessLabels <a name="ChronicleDataAccessScopeDeniedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleDataAccessScopeDeniedDataAccessLabels {
    string AssetNamespace = null,
    string DataAccessLabel = null,
    ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel IngestionLabel = null,
    string LogType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.assetNamespace">AssetNamespace</a></code> | <code>string</code> | The asset namespace configured in the forwarder of the customer's events. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.dataAccessLabel">DataAccessLabel</a></code> | <code>string</code> | The name of the data access label. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.ingestionLabel">IngestionLabel</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | ingestion_label block. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.logType">LogType</a></code> | <code>string</code> | The name of the log type. |

---

##### `AssetNamespace`<sup>Optional</sup> <a name="AssetNamespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.assetNamespace"></a>

```csharp
public string AssetNamespace { get; set; }
```

- *Type:* string

The asset namespace configured in the forwarder of the customer's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#asset_namespace ChronicleDataAccessScope#asset_namespace}

---

##### `DataAccessLabel`<sup>Optional</sup> <a name="DataAccessLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.dataAccessLabel"></a>

```csharp
public string DataAccessLabel { get; set; }
```

- *Type:* string

The name of the data access label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#data_access_label ChronicleDataAccessScope#data_access_label}

---

##### `IngestionLabel`<sup>Optional</sup> <a name="IngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.ingestionLabel"></a>

```csharp
public ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel IngestionLabel { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

ingestion_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#ingestion_label ChronicleDataAccessScope#ingestion_label}

---

##### `LogType`<sup>Optional</sup> <a name="LogType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.logType"></a>

```csharp
public string LogType { get; set; }
```

- *Type:* string

The name of the log type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#log_type ChronicleDataAccessScope#log_type}

---

### ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel <a name="ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel {
    string IngestionLabelKey,
    string IngestionLabelValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelKey">IngestionLabelKey</a></code> | <code>string</code> | Required. The key of the ingestion label. Always required. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelValue">IngestionLabelValue</a></code> | <code>string</code> | Optional. |

---

##### `IngestionLabelKey`<sup>Required</sup> <a name="IngestionLabelKey" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelKey"></a>

```csharp
public string IngestionLabelKey { get; set; }
```

- *Type:* string

Required. The key of the ingestion label. Always required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#ingestion_label_key ChronicleDataAccessScope#ingestion_label_key}

---

##### `IngestionLabelValue`<sup>Optional</sup> <a name="IngestionLabelValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelValue"></a>

```csharp
public string IngestionLabelValue { get; set; }
```

- *Type:* string

Optional.

The value of the ingestion label. Optional. An object
with no provided value and some key provided would match
against the given key and ANY value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#ingestion_label_value ChronicleDataAccessScope#ingestion_label_value}

---

### ChronicleDataAccessScopeTimeouts <a name="ChronicleDataAccessScopeTimeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleDataAccessScopeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#create ChronicleDataAccessScope#create}. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#delete ChronicleDataAccessScope#delete}. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#update ChronicleDataAccessScope#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#create ChronicleDataAccessScope#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#delete ChronicleDataAccessScope#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/chronicle_data_access_scope#update ChronicleDataAccessScope#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference <a name="ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue">ResetIngestionLabelValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIngestionLabelValue` <a name="ResetIngestionLabelValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue"></a>

```csharp
private void ResetIngestionLabelValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput">IngestionLabelKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput">IngestionLabelValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey">IngestionLabelKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue">IngestionLabelValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngestionLabelKeyInput`<sup>Optional</sup> <a name="IngestionLabelKeyInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput"></a>

```csharp
public string IngestionLabelKeyInput { get; }
```

- *Type:* string

---

##### `IngestionLabelValueInput`<sup>Optional</sup> <a name="IngestionLabelValueInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput"></a>

```csharp
public string IngestionLabelValueInput { get; }
```

- *Type:* string

---

##### `IngestionLabelKey`<sup>Required</sup> <a name="IngestionLabelKey" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey"></a>

```csharp
public string IngestionLabelKey { get; }
```

- *Type:* string

---

##### `IngestionLabelValue`<sup>Required</sup> <a name="IngestionLabelValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue"></a>

```csharp
public string IngestionLabelValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.internalValue"></a>

```csharp
public ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

---


### ChronicleDataAccessScopeAllowedDataAccessLabelsList <a name="ChronicleDataAccessScopeAllowedDataAccessLabelsList" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleDataAccessScopeAllowedDataAccessLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.get"></a>

```csharp
private ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference <a name="ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel">PutIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetAssetNamespace">ResetAssetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetDataAccessLabel">ResetDataAccessLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetIngestionLabel">ResetIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetLogType">ResetLogType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIngestionLabel` <a name="PutIngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel"></a>

```csharp
private void PutIngestionLabel(ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

---

##### `ResetAssetNamespace` <a name="ResetAssetNamespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetAssetNamespace"></a>

```csharp
private void ResetAssetNamespace()
```

##### `ResetDataAccessLabel` <a name="ResetDataAccessLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetDataAccessLabel"></a>

```csharp
private void ResetDataAccessLabel()
```

##### `ResetIngestionLabel` <a name="ResetIngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetIngestionLabel"></a>

```csharp
private void ResetIngestionLabel()
```

##### `ResetLogType` <a name="ResetLogType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetLogType"></a>

```csharp
private void ResetLogType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabel">IngestionLabel</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespaceInput">AssetNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabelInput">DataAccessLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabelInput">IngestionLabelInput</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespace">AssetNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabel">DataAccessLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IngestionLabel`<sup>Required</sup> <a name="IngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabel"></a>

```csharp
public ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference IngestionLabel { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference</a>

---

##### `AssetNamespaceInput`<sup>Optional</sup> <a name="AssetNamespaceInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespaceInput"></a>

```csharp
public string AssetNamespaceInput { get; }
```

- *Type:* string

---

##### `DataAccessLabelInput`<sup>Optional</sup> <a name="DataAccessLabelInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabelInput"></a>

```csharp
public string DataAccessLabelInput { get; }
```

- *Type:* string

---

##### `IngestionLabelInput`<sup>Optional</sup> <a name="IngestionLabelInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabelInput"></a>

```csharp
public ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel IngestionLabelInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logTypeInput"></a>

```csharp
public string LogTypeInput { get; }
```

- *Type:* string

---

##### `AssetNamespace`<sup>Required</sup> <a name="AssetNamespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespace"></a>

```csharp
public string AssetNamespace { get; }
```

- *Type:* string

---

##### `DataAccessLabel`<sup>Required</sup> <a name="DataAccessLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabel"></a>

```csharp
public string DataAccessLabel { get; }
```

- *Type:* string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference <a name="ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue">ResetIngestionLabelValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIngestionLabelValue` <a name="ResetIngestionLabelValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue"></a>

```csharp
private void ResetIngestionLabelValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput">IngestionLabelKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput">IngestionLabelValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey">IngestionLabelKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue">IngestionLabelValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngestionLabelKeyInput`<sup>Optional</sup> <a name="IngestionLabelKeyInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput"></a>

```csharp
public string IngestionLabelKeyInput { get; }
```

- *Type:* string

---

##### `IngestionLabelValueInput`<sup>Optional</sup> <a name="IngestionLabelValueInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput"></a>

```csharp
public string IngestionLabelValueInput { get; }
```

- *Type:* string

---

##### `IngestionLabelKey`<sup>Required</sup> <a name="IngestionLabelKey" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey"></a>

```csharp
public string IngestionLabelKey { get; }
```

- *Type:* string

---

##### `IngestionLabelValue`<sup>Required</sup> <a name="IngestionLabelValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue"></a>

```csharp
public string IngestionLabelValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.internalValue"></a>

```csharp
public ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

---


### ChronicleDataAccessScopeDeniedDataAccessLabelsList <a name="ChronicleDataAccessScopeDeniedDataAccessLabelsList" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleDataAccessScopeDeniedDataAccessLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.get"></a>

```csharp
private ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference <a name="ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel">PutIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetAssetNamespace">ResetAssetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetDataAccessLabel">ResetDataAccessLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetIngestionLabel">ResetIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetLogType">ResetLogType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIngestionLabel` <a name="PutIngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel"></a>

```csharp
private void PutIngestionLabel(ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

---

##### `ResetAssetNamespace` <a name="ResetAssetNamespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetAssetNamespace"></a>

```csharp
private void ResetAssetNamespace()
```

##### `ResetDataAccessLabel` <a name="ResetDataAccessLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetDataAccessLabel"></a>

```csharp
private void ResetDataAccessLabel()
```

##### `ResetIngestionLabel` <a name="ResetIngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetIngestionLabel"></a>

```csharp
private void ResetIngestionLabel()
```

##### `ResetLogType` <a name="ResetLogType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetLogType"></a>

```csharp
private void ResetLogType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabel">IngestionLabel</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespaceInput">AssetNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabelInput">DataAccessLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabelInput">IngestionLabelInput</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespace">AssetNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabel">DataAccessLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IngestionLabel`<sup>Required</sup> <a name="IngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabel"></a>

```csharp
public ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference IngestionLabel { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference</a>

---

##### `AssetNamespaceInput`<sup>Optional</sup> <a name="AssetNamespaceInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespaceInput"></a>

```csharp
public string AssetNamespaceInput { get; }
```

- *Type:* string

---

##### `DataAccessLabelInput`<sup>Optional</sup> <a name="DataAccessLabelInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabelInput"></a>

```csharp
public string DataAccessLabelInput { get; }
```

- *Type:* string

---

##### `IngestionLabelInput`<sup>Optional</sup> <a name="IngestionLabelInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabelInput"></a>

```csharp
public ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel IngestionLabelInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logTypeInput"></a>

```csharp
public string LogTypeInput { get; }
```

- *Type:* string

---

##### `AssetNamespace`<sup>Required</sup> <a name="AssetNamespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespace"></a>

```csharp
public string AssetNamespace { get; }
```

- *Type:* string

---

##### `DataAccessLabel`<sup>Required</sup> <a name="DataAccessLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabel"></a>

```csharp
public string DataAccessLabel { get; }
```

- *Type:* string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ChronicleDataAccessScopeTimeoutsOutputReference <a name="ChronicleDataAccessScopeTimeoutsOutputReference" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleDataAccessScopeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



