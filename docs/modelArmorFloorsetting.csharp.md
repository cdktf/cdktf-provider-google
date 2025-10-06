# `modelArmorFloorsetting` Submodule <a name="`modelArmorFloorsetting` Submodule" id="@cdktf/provider-google.modelArmorFloorsetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ModelArmorFloorsetting <a name="ModelArmorFloorsetting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting google_model_armor_floorsetting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsetting(Construct Scope, string Id, ModelArmorFloorsettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig">ModelArmorFloorsettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig">ModelArmorFloorsettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putAiPlatformFloorSetting">PutAiPlatformFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFilterConfig">PutFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFloorSettingMetadata">PutFloorSettingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetAiPlatformFloorSetting">ResetAiPlatformFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetEnableFloorSettingEnforcement">ResetEnableFloorSettingEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetFloorSettingMetadata">ResetFloorSettingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetIntegratedServices">ResetIntegratedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAiPlatformFloorSetting` <a name="PutAiPlatformFloorSetting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putAiPlatformFloorSetting"></a>

```csharp
private void PutAiPlatformFloorSetting(ModelArmorFloorsettingAiPlatformFloorSetting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putAiPlatformFloorSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a>

---

##### `PutFilterConfig` <a name="PutFilterConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFilterConfig"></a>

```csharp
private void PutFilterConfig(ModelArmorFloorsettingFilterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFilterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a>

---

##### `PutFloorSettingMetadata` <a name="PutFloorSettingMetadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFloorSettingMetadata"></a>

```csharp
private void PutFloorSettingMetadata(ModelArmorFloorsettingFloorSettingMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFloorSettingMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putTimeouts"></a>

```csharp
private void PutTimeouts(ModelArmorFloorsettingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a>

---

##### `ResetAiPlatformFloorSetting` <a name="ResetAiPlatformFloorSetting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetAiPlatformFloorSetting"></a>

```csharp
private void ResetAiPlatformFloorSetting()
```

##### `ResetEnableFloorSettingEnforcement` <a name="ResetEnableFloorSettingEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetEnableFloorSettingEnforcement"></a>

```csharp
private void ResetEnableFloorSettingEnforcement()
```

##### `ResetFloorSettingMetadata` <a name="ResetFloorSettingMetadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetFloorSettingMetadata"></a>

```csharp
private void ResetFloorSettingMetadata()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIntegratedServices` <a name="ResetIntegratedServices" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetIntegratedServices"></a>

```csharp
private void ResetIntegratedServices()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ModelArmorFloorsetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ModelArmorFloorsetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ModelArmorFloorsetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ModelArmorFloorsetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ModelArmorFloorsetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ModelArmorFloorsetting resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ModelArmorFloorsetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ModelArmorFloorsetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ModelArmorFloorsetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.aiPlatformFloorSetting">AiPlatformFloorSetting</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference">ModelArmorFloorsettingAiPlatformFloorSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.filterConfig">FilterConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference">ModelArmorFloorsettingFilterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.floorSettingMetadata">FloorSettingMetadata</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference">ModelArmorFloorsettingFloorSettingMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference">ModelArmorFloorsettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.aiPlatformFloorSettingInput">AiPlatformFloorSettingInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.enableFloorSettingEnforcementInput">EnableFloorSettingEnforcementInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.filterConfigInput">FilterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.floorSettingMetadataInput">FloorSettingMetadataInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.integratedServicesInput">IntegratedServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.enableFloorSettingEnforcement">EnableFloorSettingEnforcement</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.integratedServices">IntegratedServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AiPlatformFloorSetting`<sup>Required</sup> <a name="AiPlatformFloorSetting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.aiPlatformFloorSetting"></a>

```csharp
public ModelArmorFloorsettingAiPlatformFloorSettingOutputReference AiPlatformFloorSetting { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference">ModelArmorFloorsettingAiPlatformFloorSettingOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `FilterConfig`<sup>Required</sup> <a name="FilterConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.filterConfig"></a>

```csharp
public ModelArmorFloorsettingFilterConfigOutputReference FilterConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference">ModelArmorFloorsettingFilterConfigOutputReference</a>

---

##### `FloorSettingMetadata`<sup>Required</sup> <a name="FloorSettingMetadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.floorSettingMetadata"></a>

```csharp
public ModelArmorFloorsettingFloorSettingMetadataOutputReference FloorSettingMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference">ModelArmorFloorsettingFloorSettingMetadataOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.timeouts"></a>

```csharp
public ModelArmorFloorsettingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference">ModelArmorFloorsettingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AiPlatformFloorSettingInput`<sup>Optional</sup> <a name="AiPlatformFloorSettingInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.aiPlatformFloorSettingInput"></a>

```csharp
public ModelArmorFloorsettingAiPlatformFloorSetting AiPlatformFloorSettingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a>

---

##### `EnableFloorSettingEnforcementInput`<sup>Optional</sup> <a name="EnableFloorSettingEnforcementInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.enableFloorSettingEnforcementInput"></a>

```csharp
public bool|IResolvable EnableFloorSettingEnforcementInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `FilterConfigInput`<sup>Optional</sup> <a name="FilterConfigInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.filterConfigInput"></a>

```csharp
public ModelArmorFloorsettingFilterConfig FilterConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a>

---

##### `FloorSettingMetadataInput`<sup>Optional</sup> <a name="FloorSettingMetadataInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.floorSettingMetadataInput"></a>

```csharp
public ModelArmorFloorsettingFloorSettingMetadata FloorSettingMetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegratedServicesInput`<sup>Optional</sup> <a name="IntegratedServicesInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.integratedServicesInput"></a>

```csharp
public string[] IntegratedServicesInput { get; }
```

- *Type:* string[]

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.timeoutsInput"></a>

```csharp
public IResolvable|ModelArmorFloorsettingTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a>

---

##### `EnableFloorSettingEnforcement`<sup>Required</sup> <a name="EnableFloorSettingEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.enableFloorSettingEnforcement"></a>

```csharp
public bool|IResolvable EnableFloorSettingEnforcement { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegratedServices`<sup>Required</sup> <a name="IntegratedServices" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.integratedServices"></a>

```csharp
public string[] IntegratedServices { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ModelArmorFloorsettingAiPlatformFloorSetting <a name="ModelArmorFloorsettingAiPlatformFloorSetting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingAiPlatformFloorSetting {
    bool|IResolvable EnableCloudLogging = null,
    bool|IResolvable InspectAndBlock = null,
    bool|IResolvable InspectOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.enableCloudLogging">EnableCloudLogging</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If true, log Model Armor filter results to Cloud Logging. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.inspectAndBlock">InspectAndBlock</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If true, Model Armor filters will be run in inspect and block mode. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.inspectOnly">InspectOnly</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If true, Model Armor filters will be run in inspect only mode. No action will be taken on the request. |

---

##### `EnableCloudLogging`<sup>Optional</sup> <a name="EnableCloudLogging" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.enableCloudLogging"></a>

```csharp
public bool|IResolvable EnableCloudLogging { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If true, log Model Armor filter results to Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#enable_cloud_logging ModelArmorFloorsetting#enable_cloud_logging}

---

##### `InspectAndBlock`<sup>Optional</sup> <a name="InspectAndBlock" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.inspectAndBlock"></a>

```csharp
public bool|IResolvable InspectAndBlock { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If true, Model Armor filters will be run in inspect and block mode.

Requests that trip Model Armor filters will be blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#inspect_and_block ModelArmorFloorsetting#inspect_and_block}

---

##### `InspectOnly`<sup>Optional</sup> <a name="InspectOnly" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.inspectOnly"></a>

```csharp
public bool|IResolvable InspectOnly { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If true, Model Armor filters will be run in inspect only mode. No action will be taken on the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#inspect_only ModelArmorFloorsetting#inspect_only}

---

### ModelArmorFloorsettingConfig <a name="ModelArmorFloorsettingConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ModelArmorFloorsettingFilterConfig FilterConfig,
    string Location,
    string Parent,
    ModelArmorFloorsettingAiPlatformFloorSetting AiPlatformFloorSetting = null,
    bool|IResolvable EnableFloorSettingEnforcement = null,
    ModelArmorFloorsettingFloorSettingMetadata FloorSettingMetadata = null,
    string Id = null,
    string[] IntegratedServices = null,
    ModelArmorFloorsettingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.filterConfig">FilterConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.parent">Parent</a></code> | <code>string</code> | Will be any one of these:. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.aiPlatformFloorSetting">AiPlatformFloorSetting</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a></code> | ai_platform_floor_setting block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.enableFloorSettingEnforcement">EnableFloorSettingEnforcement</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Floor Settings enforcement status. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.floorSettingMetadata">FloorSettingMetadata</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a></code> | floor_setting_metadata block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#id ModelArmorFloorsetting#id}. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.integratedServices">IntegratedServices</a></code> | <code>string[]</code> | List of integrated services for which the floor setting is applicable. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `FilterConfig`<sup>Required</sup> <a name="FilterConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.filterConfig"></a>

```csharp
public ModelArmorFloorsettingFilterConfig FilterConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#filter_config ModelArmorFloorsetting#filter_config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#location ModelArmorFloorsetting#location}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Will be any one of these:.

* 'projects/{project}'
* 'folders/{folder}'
* 'organizations/{organizationId}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#parent ModelArmorFloorsetting#parent}

---

##### `AiPlatformFloorSetting`<sup>Optional</sup> <a name="AiPlatformFloorSetting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.aiPlatformFloorSetting"></a>

```csharp
public ModelArmorFloorsettingAiPlatformFloorSetting AiPlatformFloorSetting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a>

ai_platform_floor_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#ai_platform_floor_setting ModelArmorFloorsetting#ai_platform_floor_setting}

---

##### `EnableFloorSettingEnforcement`<sup>Optional</sup> <a name="EnableFloorSettingEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.enableFloorSettingEnforcement"></a>

```csharp
public bool|IResolvable EnableFloorSettingEnforcement { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Floor Settings enforcement status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#enable_floor_setting_enforcement ModelArmorFloorsetting#enable_floor_setting_enforcement}

---

##### `FloorSettingMetadata`<sup>Optional</sup> <a name="FloorSettingMetadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.floorSettingMetadata"></a>

```csharp
public ModelArmorFloorsettingFloorSettingMetadata FloorSettingMetadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a>

floor_setting_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#floor_setting_metadata ModelArmorFloorsetting#floor_setting_metadata}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#id ModelArmorFloorsetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegratedServices`<sup>Optional</sup> <a name="IntegratedServices" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.integratedServices"></a>

```csharp
public string[] IntegratedServices { get; set; }
```

- *Type:* string[]

List of integrated services for which the floor setting is applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#integrated_services ModelArmorFloorsetting#integrated_services}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.timeouts"></a>

```csharp
public ModelArmorFloorsettingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#timeouts ModelArmorFloorsetting#timeouts}

---

### ModelArmorFloorsettingFilterConfig <a name="ModelArmorFloorsettingFilterConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfig {
    ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings MaliciousUriFilterSettings = null,
    ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings PiAndJailbreakFilterSettings = null,
    ModelArmorFloorsettingFilterConfigRaiSettings RaiSettings = null,
    ModelArmorFloorsettingFilterConfigSdpSettings SdpSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.maliciousUriFilterSettings">MaliciousUriFilterSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | malicious_uri_filter_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.piAndJailbreakFilterSettings">PiAndJailbreakFilterSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | pi_and_jailbreak_filter_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.raiSettings">RaiSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a></code> | rai_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.sdpSettings">SdpSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a></code> | sdp_settings block. |

---

##### `MaliciousUriFilterSettings`<sup>Optional</sup> <a name="MaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.maliciousUriFilterSettings"></a>

```csharp
public ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings MaliciousUriFilterSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

malicious_uri_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#malicious_uri_filter_settings ModelArmorFloorsetting#malicious_uri_filter_settings}

---

##### `PiAndJailbreakFilterSettings`<sup>Optional</sup> <a name="PiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.piAndJailbreakFilterSettings"></a>

```csharp
public ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings PiAndJailbreakFilterSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

pi_and_jailbreak_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#pi_and_jailbreak_filter_settings ModelArmorFloorsetting#pi_and_jailbreak_filter_settings}

---

##### `RaiSettings`<sup>Optional</sup> <a name="RaiSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.raiSettings"></a>

```csharp
public ModelArmorFloorsettingFilterConfigRaiSettings RaiSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a>

rai_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#rai_settings ModelArmorFloorsetting#rai_settings}

---

##### `SdpSettings`<sup>Optional</sup> <a name="SdpSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.sdpSettings"></a>

```csharp
public ModelArmorFloorsettingFilterConfigSdpSettings SdpSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a>

sdp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#sdp_settings ModelArmorFloorsetting#sdp_settings}

---

### ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings <a name="ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings {
    string FilterEnforcement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `FilterEnforcement`<sup>Optional</sup> <a name="FilterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; set; }
```

- *Type:* string

Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#filter_enforcement ModelArmorFloorsetting#filter_enforcement}

---

### ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings <a name="ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings {
    string ConfidenceLevel = null,
    string FilterEnforcement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel">ConfidenceLevel</a></code> | <code>string</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `ConfidenceLevel`<sup>Optional</sup> <a name="ConfidenceLevel" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel"></a>

```csharp
public string ConfidenceLevel { get; set; }
```

- *Type:* string

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#confidence_level ModelArmorFloorsetting#confidence_level}

---

##### `FilterEnforcement`<sup>Optional</sup> <a name="FilterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; set; }
```

- *Type:* string

Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#filter_enforcement ModelArmorFloorsetting#filter_enforcement}

---

### ModelArmorFloorsettingFilterConfigRaiSettings <a name="ModelArmorFloorsettingFilterConfigRaiSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfigRaiSettings {
    IResolvable|ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters[] RaiFilters
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings.property.raiFilters">RaiFilters</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>[]</code> | rai_filters block. |

---

##### `RaiFilters`<sup>Required</sup> <a name="RaiFilters" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings.property.raiFilters"></a>

```csharp
public IResolvable|ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters[] RaiFilters { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>[]

rai_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#rai_filters ModelArmorFloorsetting#rai_filters}

---

### ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters <a name="ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters {
    string FilterType,
    string ConfidenceLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.filterType">FilterType</a></code> | <code>string</code> | Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.confidenceLevel">ConfidenceLevel</a></code> | <code>string</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.filterType"></a>

```csharp
public string FilterType { get; set; }
```

- *Type:* string

Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#filter_type ModelArmorFloorsetting#filter_type}

---

##### `ConfidenceLevel`<sup>Optional</sup> <a name="ConfidenceLevel" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.confidenceLevel"></a>

```csharp
public string ConfidenceLevel { get; set; }
```

- *Type:* string

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#confidence_level ModelArmorFloorsetting#confidence_level}

---

### ModelArmorFloorsettingFilterConfigSdpSettings <a name="ModelArmorFloorsettingFilterConfigSdpSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfigSdpSettings {
    ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig AdvancedConfig = null,
    ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig BasicConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings.property.advancedConfig">AdvancedConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | advanced_config block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings.property.basicConfig">BasicConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | basic_config block. |

---

##### `AdvancedConfig`<sup>Optional</sup> <a name="AdvancedConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings.property.advancedConfig"></a>

```csharp
public ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig AdvancedConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

advanced_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#advanced_config ModelArmorFloorsetting#advanced_config}

---

##### `BasicConfig`<sup>Optional</sup> <a name="BasicConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings.property.basicConfig"></a>

```csharp
public ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig BasicConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

basic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#basic_config ModelArmorFloorsetting#basic_config}

---

### ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig <a name="ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig {
    string DeidentifyTemplate = null,
    string InspectTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>string</code> | Optional Sensitive Data Protection Deidentify template resource name. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate">InspectTemplate</a></code> | <code>string</code> | Sensitive Data Protection inspect template resource name. |

---

##### `DeidentifyTemplate`<sup>Optional</sup> <a name="DeidentifyTemplate" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate"></a>

```csharp
public string DeidentifyTemplate { get; set; }
```

- *Type:* string

Optional Sensitive Data Protection Deidentify template resource name.

If provided then DeidentifyContent action is performed during Sanitization
using this template and inspect template. The De-identified data will
be returned in SdpDeidentifyResult.
Note that all info-types present in the deidentify template must be present
in inspect template.

e.g.
'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#deidentify_template ModelArmorFloorsetting#deidentify_template}

---

##### `InspectTemplate`<sup>Optional</sup> <a name="InspectTemplate" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate"></a>

```csharp
public string InspectTemplate { get; set; }
```

- *Type:* string

Sensitive Data Protection inspect template resource name.

If only inspect template is provided (de-identify template not provided),
then Sensitive Data Protection InspectContent action is performed during
Sanitization. All Sensitive Data Protection findings identified during
inspection will be returned as SdpFinding in SdpInsepctionResult.

e.g:-
'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#inspect_template ModelArmorFloorsetting#inspect_template}

---

### ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig <a name="ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig {
    string FilterEnforcement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `FilterEnforcement`<sup>Optional</sup> <a name="FilterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; set; }
```

- *Type:* string

Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#filter_enforcement ModelArmorFloorsetting#filter_enforcement}

---

### ModelArmorFloorsettingFloorSettingMetadata <a name="ModelArmorFloorsettingFloorSettingMetadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFloorSettingMetadata {
    ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection MultiLanguageDetection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata.property.multiLanguageDetection">MultiLanguageDetection</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | multi_language_detection block. |

---

##### `MultiLanguageDetection`<sup>Optional</sup> <a name="MultiLanguageDetection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata.property.multiLanguageDetection"></a>

```csharp
public ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection MultiLanguageDetection { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

multi_language_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#multi_language_detection ModelArmorFloorsetting#multi_language_detection}

---

### ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection <a name="ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection {
    bool|IResolvable EnableMultiLanguageDetection
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.property.enableMultiLanguageDetection">EnableMultiLanguageDetection</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If true, multi language detection will be enabled. |

---

##### `EnableMultiLanguageDetection`<sup>Required</sup> <a name="EnableMultiLanguageDetection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.property.enableMultiLanguageDetection"></a>

```csharp
public bool|IResolvable EnableMultiLanguageDetection { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If true, multi language detection will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#enable_multi_language_detection ModelArmorFloorsetting#enable_multi_language_detection}

---

### ModelArmorFloorsettingTimeouts <a name="ModelArmorFloorsettingTimeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#create ModelArmorFloorsetting#create}. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#delete ModelArmorFloorsetting#delete}. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#update ModelArmorFloorsetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#create ModelArmorFloorsetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#delete ModelArmorFloorsetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#update ModelArmorFloorsetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ModelArmorFloorsettingAiPlatformFloorSettingOutputReference <a name="ModelArmorFloorsettingAiPlatformFloorSettingOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingAiPlatformFloorSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetEnableCloudLogging">ResetEnableCloudLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectAndBlock">ResetInspectAndBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectOnly">ResetInspectOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableCloudLogging` <a name="ResetEnableCloudLogging" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetEnableCloudLogging"></a>

```csharp
private void ResetEnableCloudLogging()
```

##### `ResetInspectAndBlock` <a name="ResetInspectAndBlock" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectAndBlock"></a>

```csharp
private void ResetInspectAndBlock()
```

##### `ResetInspectOnly` <a name="ResetInspectOnly" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectOnly"></a>

```csharp
private void ResetInspectOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLoggingInput">EnableCloudLoggingInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlockInput">InspectAndBlockInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnlyInput">InspectOnlyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLogging">EnableCloudLogging</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlock">InspectAndBlock</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnly">InspectOnly</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableCloudLoggingInput`<sup>Optional</sup> <a name="EnableCloudLoggingInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLoggingInput"></a>

```csharp
public bool|IResolvable EnableCloudLoggingInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InspectAndBlockInput`<sup>Optional</sup> <a name="InspectAndBlockInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlockInput"></a>

```csharp
public bool|IResolvable InspectAndBlockInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InspectOnlyInput`<sup>Optional</sup> <a name="InspectOnlyInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnlyInput"></a>

```csharp
public bool|IResolvable InspectOnlyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnableCloudLogging`<sup>Required</sup> <a name="EnableCloudLogging" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLogging"></a>

```csharp
public bool|IResolvable EnableCloudLogging { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InspectAndBlock`<sup>Required</sup> <a name="InspectAndBlock" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlock"></a>

```csharp
public bool|IResolvable InspectAndBlock { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InspectOnly`<sup>Required</sup> <a name="InspectOnly" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnly"></a>

```csharp
public bool|IResolvable InspectOnly { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.internalValue"></a>

```csharp
public ModelArmorFloorsettingAiPlatformFloorSetting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a>

---


### ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference <a name="ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement">ResetFilterEnforcement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterEnforcement` <a name="ResetFilterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement"></a>

```csharp
private void ResetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput">FilterEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterEnforcementInput`<sup>Optional</sup> <a name="FilterEnforcementInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```csharp
public string FilterEnforcementInput { get; }
```

- *Type:* string

---

##### `FilterEnforcement`<sup>Required</sup> <a name="FilterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue"></a>

```csharp
public ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

---


### ModelArmorFloorsettingFilterConfigOutputReference <a name="ModelArmorFloorsettingFilterConfigOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings">PutMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings">PutPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings">PutRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings">PutSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetMaliciousUriFilterSettings">ResetMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetPiAndJailbreakFilterSettings">ResetPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetRaiSettings">ResetRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetSdpSettings">ResetSdpSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaliciousUriFilterSettings` <a name="PutMaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings"></a>

```csharp
private void PutMaliciousUriFilterSettings(ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

---

##### `PutPiAndJailbreakFilterSettings` <a name="PutPiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings"></a>

```csharp
private void PutPiAndJailbreakFilterSettings(ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `PutRaiSettings` <a name="PutRaiSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings"></a>

```csharp
private void PutRaiSettings(ModelArmorFloorsettingFilterConfigRaiSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a>

---

##### `PutSdpSettings` <a name="PutSdpSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings"></a>

```csharp
private void PutSdpSettings(ModelArmorFloorsettingFilterConfigSdpSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a>

---

##### `ResetMaliciousUriFilterSettings` <a name="ResetMaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetMaliciousUriFilterSettings"></a>

```csharp
private void ResetMaliciousUriFilterSettings()
```

##### `ResetPiAndJailbreakFilterSettings` <a name="ResetPiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetPiAndJailbreakFilterSettings"></a>

```csharp
private void ResetPiAndJailbreakFilterSettings()
```

##### `ResetRaiSettings` <a name="ResetRaiSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetRaiSettings"></a>

```csharp
private void ResetRaiSettings()
```

##### `ResetSdpSettings` <a name="ResetSdpSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetSdpSettings"></a>

```csharp
private void ResetSdpSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettings">MaliciousUriFilterSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettings">PiAndJailbreakFilterSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.raiSettings">RaiSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference">ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettings">SdpSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettingsInput">MaliciousUriFilterSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput">PiAndJailbreakFilterSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.raiSettingsInput">RaiSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettingsInput">SdpSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaliciousUriFilterSettings`<sup>Required</sup> <a name="MaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettings"></a>

```csharp
public ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference MaliciousUriFilterSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference</a>

---

##### `PiAndJailbreakFilterSettings`<sup>Required</sup> <a name="PiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettings"></a>

```csharp
public ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference PiAndJailbreakFilterSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference</a>

---

##### `RaiSettings`<sup>Required</sup> <a name="RaiSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.raiSettings"></a>

```csharp
public ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference RaiSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference">ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference</a>

---

##### `SdpSettings`<sup>Required</sup> <a name="SdpSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettings"></a>

```csharp
public ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference SdpSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference</a>

---

##### `MaliciousUriFilterSettingsInput`<sup>Optional</sup> <a name="MaliciousUriFilterSettingsInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettingsInput"></a>

```csharp
public ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings MaliciousUriFilterSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

---

##### `PiAndJailbreakFilterSettingsInput`<sup>Optional</sup> <a name="PiAndJailbreakFilterSettingsInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput"></a>

```csharp
public ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings PiAndJailbreakFilterSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `RaiSettingsInput`<sup>Optional</sup> <a name="RaiSettingsInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.raiSettingsInput"></a>

```csharp
public ModelArmorFloorsettingFilterConfigRaiSettings RaiSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a>

---

##### `SdpSettingsInput`<sup>Optional</sup> <a name="SdpSettingsInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettingsInput"></a>

```csharp
public ModelArmorFloorsettingFilterConfigSdpSettings SdpSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.internalValue"></a>

```csharp
public ModelArmorFloorsettingFilterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a>

---


### ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference <a name="ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel">ResetConfidenceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement">ResetFilterEnforcement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidenceLevel` <a name="ResetConfidenceLevel" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel"></a>

```csharp
private void ResetConfidenceLevel()
```

##### `ResetFilterEnforcement` <a name="ResetFilterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement"></a>

```csharp
private void ResetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput">ConfidenceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput">FilterEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel">ConfidenceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfidenceLevelInput`<sup>Optional</sup> <a name="ConfidenceLevelInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput"></a>

```csharp
public string ConfidenceLevelInput { get; }
```

- *Type:* string

---

##### `FilterEnforcementInput`<sup>Optional</sup> <a name="FilterEnforcementInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```csharp
public string FilterEnforcementInput { get; }
```

- *Type:* string

---

##### `ConfidenceLevel`<sup>Required</sup> <a name="ConfidenceLevel" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel"></a>

```csharp
public string ConfidenceLevel { get; }
```

- *Type:* string

---

##### `FilterEnforcement`<sup>Required</sup> <a name="FilterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue"></a>

```csharp
public ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

---


### ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference <a name="ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters">PutRaiFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRaiFilters` <a name="PutRaiFilters" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters"></a>

```csharp
private void PutRaiFilters(IResolvable|ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFilters">RaiFilters</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFiltersInput">RaiFiltersInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RaiFilters`<sup>Required</sup> <a name="RaiFilters" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFilters"></a>

```csharp
public ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList RaiFilters { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList</a>

---

##### `RaiFiltersInput`<sup>Optional</sup> <a name="RaiFiltersInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFiltersInput"></a>

```csharp
public IResolvable|ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters[] RaiFiltersInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.internalValue"></a>

```csharp
public ModelArmorFloorsettingFilterConfigRaiSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a>

---


### ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList <a name="ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get"></a>

```csharp
private ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.internalValue"></a>

```csharp
public IResolvable|ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>[]

---


### ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference <a name="ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel">ResetConfidenceLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidenceLevel` <a name="ResetConfidenceLevel" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel"></a>

```csharp
private void ResetConfidenceLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput">ConfidenceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel">ConfidenceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType">FilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfidenceLevelInput`<sup>Optional</sup> <a name="ConfidenceLevelInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput"></a>

```csharp
public string ConfidenceLevelInput { get; }
```

- *Type:* string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput"></a>

```csharp
public string FilterTypeInput { get; }
```

- *Type:* string

---

##### `ConfidenceLevel`<sup>Required</sup> <a name="ConfidenceLevel" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel"></a>

```csharp
public string ConfidenceLevel { get; }
```

- *Type:* string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType"></a>

```csharp
public string FilterType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>

---


### ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference <a name="ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate">ResetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate">ResetInspectTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeidentifyTemplate` <a name="ResetDeidentifyTemplate" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate"></a>

```csharp
private void ResetDeidentifyTemplate()
```

##### `ResetInspectTemplate` <a name="ResetInspectTemplate" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate"></a>

```csharp
private void ResetInspectTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput">DeidentifyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput">InspectTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate">InspectTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeidentifyTemplateInput`<sup>Optional</sup> <a name="DeidentifyTemplateInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput"></a>

```csharp
public string DeidentifyTemplateInput { get; }
```

- *Type:* string

---

##### `InspectTemplateInput`<sup>Optional</sup> <a name="InspectTemplateInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput"></a>

```csharp
public string InspectTemplateInput { get; }
```

- *Type:* string

---

##### `DeidentifyTemplate`<sup>Required</sup> <a name="DeidentifyTemplate" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate"></a>

```csharp
public string DeidentifyTemplate { get; }
```

- *Type:* string

---

##### `InspectTemplate`<sup>Required</sup> <a name="InspectTemplate" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate"></a>

```csharp
public string InspectTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue"></a>

```csharp
public ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

---


### ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference <a name="ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement">ResetFilterEnforcement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterEnforcement` <a name="ResetFilterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement"></a>

```csharp
private void ResetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput">FilterEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterEnforcementInput`<sup>Optional</sup> <a name="FilterEnforcementInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput"></a>

```csharp
public string FilterEnforcementInput { get; }
```

- *Type:* string

---

##### `FilterEnforcement`<sup>Required</sup> <a name="FilterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue"></a>

```csharp
public ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

---


### ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference <a name="ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig">PutAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig">PutBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetAdvancedConfig">ResetAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetBasicConfig">ResetBasicConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedConfig` <a name="PutAdvancedConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig"></a>

```csharp
private void PutAdvancedConfig(ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `PutBasicConfig` <a name="PutBasicConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig"></a>

```csharp
private void PutBasicConfig(ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

---

##### `ResetAdvancedConfig` <a name="ResetAdvancedConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetAdvancedConfig"></a>

```csharp
private void ResetAdvancedConfig()
```

##### `ResetBasicConfig` <a name="ResetBasicConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetBasicConfig"></a>

```csharp
private void ResetBasicConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfig">AdvancedConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfig">BasicConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfigInput">AdvancedConfigInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfigInput">BasicConfigInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvancedConfig`<sup>Required</sup> <a name="AdvancedConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfig"></a>

```csharp
public ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference AdvancedConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference</a>

---

##### `BasicConfig`<sup>Required</sup> <a name="BasicConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfig"></a>

```csharp
public ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference BasicConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference</a>

---

##### `AdvancedConfigInput`<sup>Optional</sup> <a name="AdvancedConfigInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfigInput"></a>

```csharp
public ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig AdvancedConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `BasicConfigInput`<sup>Optional</sup> <a name="BasicConfigInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfigInput"></a>

```csharp
public ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig BasicConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.internalValue"></a>

```csharp
public ModelArmorFloorsettingFilterConfigSdpSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a>

---


### ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference <a name="ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput">EnableMultiLanguageDetectionInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection">EnableMultiLanguageDetection</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableMultiLanguageDetectionInput`<sup>Optional</sup> <a name="EnableMultiLanguageDetectionInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput"></a>

```csharp
public bool|IResolvable EnableMultiLanguageDetectionInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnableMultiLanguageDetection`<sup>Required</sup> <a name="EnableMultiLanguageDetection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection"></a>

```csharp
public bool|IResolvable EnableMultiLanguageDetection { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.internalValue"></a>

```csharp
public ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

---


### ModelArmorFloorsettingFloorSettingMetadataOutputReference <a name="ModelArmorFloorsettingFloorSettingMetadataOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingFloorSettingMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection">PutMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.resetMultiLanguageDetection">ResetMultiLanguageDetection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMultiLanguageDetection` <a name="PutMultiLanguageDetection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection"></a>

```csharp
private void PutMultiLanguageDetection(ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

---

##### `ResetMultiLanguageDetection` <a name="ResetMultiLanguageDetection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.resetMultiLanguageDetection"></a>

```csharp
private void ResetMultiLanguageDetection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetection">MultiLanguageDetection</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetectionInput">MultiLanguageDetectionInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MultiLanguageDetection`<sup>Required</sup> <a name="MultiLanguageDetection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetection"></a>

```csharp
public ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference MultiLanguageDetection { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference</a>

---

##### `MultiLanguageDetectionInput`<sup>Optional</sup> <a name="MultiLanguageDetectionInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetectionInput"></a>

```csharp
public ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection MultiLanguageDetectionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.internalValue"></a>

```csharp
public ModelArmorFloorsettingFloorSettingMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a>

---


### ModelArmorFloorsettingTimeoutsOutputReference <a name="ModelArmorFloorsettingTimeoutsOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorFloorsettingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ModelArmorFloorsettingTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a>

---



