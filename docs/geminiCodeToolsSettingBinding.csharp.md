# `geminiCodeToolsSettingBinding` Submodule <a name="`geminiCodeToolsSettingBinding` Submodule" id="@cdktf/provider-google.geminiCodeToolsSettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiCodeToolsSettingBinding <a name="GeminiCodeToolsSettingBinding" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding google_gemini_code_tools_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiCodeToolsSettingBinding(Construct Scope, string Id, GeminiCodeToolsSettingBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig">GeminiCodeToolsSettingBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig">GeminiCodeToolsSettingBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetProduct">ResetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(GeminiCodeToolsSettingBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts">GeminiCodeToolsSettingBindingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProduct` <a name="ResetProduct" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetProduct"></a>

```csharp
private void ResetProduct()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiCodeToolsSettingBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiCodeToolsSettingBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiCodeToolsSettingBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiCodeToolsSettingBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiCodeToolsSettingBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GeminiCodeToolsSettingBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiCodeToolsSettingBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiCodeToolsSettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GeminiCodeToolsSettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference">GeminiCodeToolsSettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.codeToolsSettingIdInput">CodeToolsSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.productInput">ProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.settingBindingIdInput">SettingBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.codeToolsSettingId">CodeToolsSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.settingBindingId">SettingBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.target">Target</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.timeouts"></a>

```csharp
public GeminiCodeToolsSettingBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference">GeminiCodeToolsSettingBindingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CodeToolsSettingIdInput`<sup>Optional</sup> <a name="CodeToolsSettingIdInput" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.codeToolsSettingIdInput"></a>

```csharp
public string CodeToolsSettingIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.productInput"></a>

```csharp
public string ProductInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SettingBindingIdInput`<sup>Optional</sup> <a name="SettingBindingIdInput" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.settingBindingIdInput"></a>

```csharp
public string SettingBindingIdInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CodeToolsSettingId`<sup>Required</sup> <a name="CodeToolsSettingId" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.codeToolsSettingId"></a>

```csharp
public string CodeToolsSettingId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SettingBindingId`<sup>Required</sup> <a name="SettingBindingId" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.settingBindingId"></a>

```csharp
public string SettingBindingId { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiCodeToolsSettingBindingConfig <a name="GeminiCodeToolsSettingBindingConfig" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiCodeToolsSettingBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CodeToolsSettingId,
    string SettingBindingId,
    string Target,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Product = null,
    string Project = null,
    GeminiCodeToolsSettingBindingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.codeToolsSettingId">CodeToolsSettingId</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.settingBindingId">SettingBindingId</a></code> | <code>string</code> | Id of the setting binding. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.target">Target</a></code> | <code>string</code> | Target of the binding. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#id GeminiCodeToolsSettingBinding#id}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.product">Product</a></code> | <code>string</code> | Product type of the setting binding. Possible values: ["GEMINI_CODE_ASSIST"]. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#project GeminiCodeToolsSettingBinding#project}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts">GeminiCodeToolsSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CodeToolsSettingId`<sup>Required</sup> <a name="CodeToolsSettingId" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.codeToolsSettingId"></a>

```csharp
public string CodeToolsSettingId { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#code_tools_setting_id GeminiCodeToolsSettingBinding#code_tools_setting_id}

---

##### `SettingBindingId`<sup>Required</sup> <a name="SettingBindingId" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.settingBindingId"></a>

```csharp
public string SettingBindingId { get; set; }
```

- *Type:* string

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#setting_binding_id GeminiCodeToolsSettingBinding#setting_binding_id}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#target GeminiCodeToolsSettingBinding#target}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#id GeminiCodeToolsSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#labels GeminiCodeToolsSettingBinding#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#location GeminiCodeToolsSettingBinding#location}

---

##### `Product`<sup>Optional</sup> <a name="Product" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.product"></a>

```csharp
public string Product { get; set; }
```

- *Type:* string

Product type of the setting binding. Possible values: ["GEMINI_CODE_ASSIST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#product GeminiCodeToolsSettingBinding#product}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#project GeminiCodeToolsSettingBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingConfig.property.timeouts"></a>

```csharp
public GeminiCodeToolsSettingBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts">GeminiCodeToolsSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#timeouts GeminiCodeToolsSettingBinding#timeouts}

---

### GeminiCodeToolsSettingBindingTimeouts <a name="GeminiCodeToolsSettingBindingTimeouts" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiCodeToolsSettingBindingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#create GeminiCodeToolsSettingBinding#create}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#delete GeminiCodeToolsSettingBinding#delete}. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#update GeminiCodeToolsSettingBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#create GeminiCodeToolsSettingBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#delete GeminiCodeToolsSettingBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/gemini_code_tools_setting_binding#update GeminiCodeToolsSettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiCodeToolsSettingBindingTimeoutsOutputReference <a name="GeminiCodeToolsSettingBindingTimeoutsOutputReference" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiCodeToolsSettingBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiCodeToolsSettingBinding.GeminiCodeToolsSettingBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



