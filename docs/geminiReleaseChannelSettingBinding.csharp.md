# `geminiReleaseChannelSettingBinding` Submodule <a name="`geminiReleaseChannelSettingBinding` Submodule" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiReleaseChannelSettingBinding <a name="GeminiReleaseChannelSettingBinding" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding google_gemini_release_channel_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiReleaseChannelSettingBinding(Construct Scope, string Id, GeminiReleaseChannelSettingBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig">GeminiReleaseChannelSettingBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig">GeminiReleaseChannelSettingBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetProduct">ResetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(GeminiReleaseChannelSettingBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts">GeminiReleaseChannelSettingBindingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProduct` <a name="ResetProduct" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetProduct"></a>

```csharp
private void ResetProduct()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiReleaseChannelSettingBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiReleaseChannelSettingBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiReleaseChannelSettingBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiReleaseChannelSettingBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiReleaseChannelSettingBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GeminiReleaseChannelSettingBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiReleaseChannelSettingBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiReleaseChannelSettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GeminiReleaseChannelSettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference">GeminiReleaseChannelSettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.productInput">ProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.releaseChannelSettingIdInput">ReleaseChannelSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.settingBindingIdInput">SettingBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.releaseChannelSettingId">ReleaseChannelSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.settingBindingId">SettingBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.target">Target</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.timeouts"></a>

```csharp
public GeminiReleaseChannelSettingBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference">GeminiReleaseChannelSettingBindingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.productInput"></a>

```csharp
public string ProductInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReleaseChannelSettingIdInput`<sup>Optional</sup> <a name="ReleaseChannelSettingIdInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.releaseChannelSettingIdInput"></a>

```csharp
public string ReleaseChannelSettingIdInput { get; }
```

- *Type:* string

---

##### `SettingBindingIdInput`<sup>Optional</sup> <a name="SettingBindingIdInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.settingBindingIdInput"></a>

```csharp
public string SettingBindingIdInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReleaseChannelSettingId`<sup>Required</sup> <a name="ReleaseChannelSettingId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.releaseChannelSettingId"></a>

```csharp
public string ReleaseChannelSettingId { get; }
```

- *Type:* string

---

##### `SettingBindingId`<sup>Required</sup> <a name="SettingBindingId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.settingBindingId"></a>

```csharp
public string SettingBindingId { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiReleaseChannelSettingBindingConfig <a name="GeminiReleaseChannelSettingBindingConfig" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiReleaseChannelSettingBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ReleaseChannelSettingId,
    string SettingBindingId,
    string Target,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Product = null,
    string Project = null,
    GeminiReleaseChannelSettingBindingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.releaseChannelSettingId">ReleaseChannelSettingId</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.settingBindingId">SettingBindingId</a></code> | <code>string</code> | Id of the setting binding. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.target">Target</a></code> | <code>string</code> | Target of the binding. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#id GeminiReleaseChannelSettingBinding#id}. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.product">Product</a></code> | <code>string</code> | Product type of the setting binding. Possible values: ["GEMINI_CLOUD_ASSIST", "GEMINI_CODE_ASSIST"]. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#project GeminiReleaseChannelSettingBinding#project}. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts">GeminiReleaseChannelSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ReleaseChannelSettingId`<sup>Required</sup> <a name="ReleaseChannelSettingId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.releaseChannelSettingId"></a>

```csharp
public string ReleaseChannelSettingId { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#release_channel_setting_id GeminiReleaseChannelSettingBinding#release_channel_setting_id}

---

##### `SettingBindingId`<sup>Required</sup> <a name="SettingBindingId" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.settingBindingId"></a>

```csharp
public string SettingBindingId { get; set; }
```

- *Type:* string

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#setting_binding_id GeminiReleaseChannelSettingBinding#setting_binding_id}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#target GeminiReleaseChannelSettingBinding#target}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#id GeminiReleaseChannelSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#labels GeminiReleaseChannelSettingBinding#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#location GeminiReleaseChannelSettingBinding#location}

---

##### `Product`<sup>Optional</sup> <a name="Product" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.product"></a>

```csharp
public string Product { get; set; }
```

- *Type:* string

Product type of the setting binding. Possible values: ["GEMINI_CLOUD_ASSIST", "GEMINI_CODE_ASSIST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#product GeminiReleaseChannelSettingBinding#product}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#project GeminiReleaseChannelSettingBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingConfig.property.timeouts"></a>

```csharp
public GeminiReleaseChannelSettingBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts">GeminiReleaseChannelSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#timeouts GeminiReleaseChannelSettingBinding#timeouts}

---

### GeminiReleaseChannelSettingBindingTimeouts <a name="GeminiReleaseChannelSettingBindingTimeouts" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiReleaseChannelSettingBindingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#create GeminiReleaseChannelSettingBinding#create}. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#delete GeminiReleaseChannelSettingBinding#delete}. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#update GeminiReleaseChannelSettingBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#create GeminiReleaseChannelSettingBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#delete GeminiReleaseChannelSettingBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/gemini_release_channel_setting_binding#update GeminiReleaseChannelSettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiReleaseChannelSettingBindingTimeoutsOutputReference <a name="GeminiReleaseChannelSettingBindingTimeoutsOutputReference" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiReleaseChannelSettingBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiReleaseChannelSettingBinding.GeminiReleaseChannelSettingBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



