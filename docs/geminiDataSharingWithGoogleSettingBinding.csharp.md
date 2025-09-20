# `geminiDataSharingWithGoogleSettingBinding` Submodule <a name="`geminiDataSharingWithGoogleSettingBinding` Submodule" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiDataSharingWithGoogleSettingBinding <a name="GeminiDataSharingWithGoogleSettingBinding" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding google_gemini_data_sharing_with_google_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiDataSharingWithGoogleSettingBinding(Construct Scope, string Id, GeminiDataSharingWithGoogleSettingBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig">GeminiDataSharingWithGoogleSettingBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig">GeminiDataSharingWithGoogleSettingBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetProduct">ResetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(GeminiDataSharingWithGoogleSettingBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProduct` <a name="ResetProduct" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetProduct"></a>

```csharp
private void ResetProduct()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiDataSharingWithGoogleSettingBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiDataSharingWithGoogleSettingBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiDataSharingWithGoogleSettingBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiDataSharingWithGoogleSettingBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiDataSharingWithGoogleSettingBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GeminiDataSharingWithGoogleSettingBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiDataSharingWithGoogleSettingBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiDataSharingWithGoogleSettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GeminiDataSharingWithGoogleSettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference">GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingIdInput">DataSharingWithGoogleSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.productInput">ProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.settingBindingIdInput">SettingBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingId">DataSharingWithGoogleSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.settingBindingId">SettingBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.target">Target</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.timeouts"></a>

```csharp
public GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference">GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DataSharingWithGoogleSettingIdInput`<sup>Optional</sup> <a name="DataSharingWithGoogleSettingIdInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingIdInput"></a>

```csharp
public string DataSharingWithGoogleSettingIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.productInput"></a>

```csharp
public string ProductInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SettingBindingIdInput`<sup>Optional</sup> <a name="SettingBindingIdInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.settingBindingIdInput"></a>

```csharp
public string SettingBindingIdInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DataSharingWithGoogleSettingId`<sup>Required</sup> <a name="DataSharingWithGoogleSettingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingId"></a>

```csharp
public string DataSharingWithGoogleSettingId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SettingBindingId`<sup>Required</sup> <a name="SettingBindingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.settingBindingId"></a>

```csharp
public string SettingBindingId { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiDataSharingWithGoogleSettingBindingConfig <a name="GeminiDataSharingWithGoogleSettingBindingConfig" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiDataSharingWithGoogleSettingBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataSharingWithGoogleSettingId,
    string SettingBindingId,
    string Target,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Product = null,
    string Project = null,
    GeminiDataSharingWithGoogleSettingBindingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.dataSharingWithGoogleSettingId">DataSharingWithGoogleSettingId</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.settingBindingId">SettingBindingId</a></code> | <code>string</code> | Required. Id of the setting binding. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.target">Target</a></code> | <code>string</code> | Target of the binding. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#id GeminiDataSharingWithGoogleSettingBinding#id}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.product">Product</a></code> | <code>string</code> | Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.dataSharingWithGoogleSettings.settingBindings) for a complete list. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#project GeminiDataSharingWithGoogleSettingBinding#project}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataSharingWithGoogleSettingId`<sup>Required</sup> <a name="DataSharingWithGoogleSettingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.dataSharingWithGoogleSettingId"></a>

```csharp
public string DataSharingWithGoogleSettingId { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#data_sharing_with_google_setting_id GeminiDataSharingWithGoogleSettingBinding#data_sharing_with_google_setting_id}

---

##### `SettingBindingId`<sup>Required</sup> <a name="SettingBindingId" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.settingBindingId"></a>

```csharp
public string SettingBindingId { get; set; }
```

- *Type:* string

Required. Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#setting_binding_id GeminiDataSharingWithGoogleSettingBinding#setting_binding_id}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#target GeminiDataSharingWithGoogleSettingBinding#target}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#id GeminiDataSharingWithGoogleSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#labels GeminiDataSharingWithGoogleSettingBinding#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#location GeminiDataSharingWithGoogleSettingBinding#location}

---

##### `Product`<sup>Optional</sup> <a name="Product" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.product"></a>

```csharp
public string Product { get; set; }
```

- *Type:* string

Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.dataSharingWithGoogleSettings.settingBindings) for a complete list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#product GeminiDataSharingWithGoogleSettingBinding#product}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#project GeminiDataSharingWithGoogleSettingBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingConfig.property.timeouts"></a>

```csharp
public GeminiDataSharingWithGoogleSettingBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts">GeminiDataSharingWithGoogleSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#timeouts GeminiDataSharingWithGoogleSettingBinding#timeouts}

---

### GeminiDataSharingWithGoogleSettingBindingTimeouts <a name="GeminiDataSharingWithGoogleSettingBindingTimeouts" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiDataSharingWithGoogleSettingBindingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#create GeminiDataSharingWithGoogleSettingBinding#create}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#delete GeminiDataSharingWithGoogleSettingBinding#delete}. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#update GeminiDataSharingWithGoogleSettingBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#create GeminiDataSharingWithGoogleSettingBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#delete GeminiDataSharingWithGoogleSettingBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/gemini_data_sharing_with_google_setting_binding#update GeminiDataSharingWithGoogleSettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference <a name="GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiDataSharingWithGoogleSettingBinding.GeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



