# `appEngineServiceNetworkSettings` Submodule <a name="`appEngineServiceNetworkSettings` Submodule" id="@cdktf/provider-google.appEngineServiceNetworkSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineServiceNetworkSettings <a name="AppEngineServiceNetworkSettings" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/app_engine_service_network_settings google_app_engine_service_network_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineServiceNetworkSettings(Construct Scope, string Id, AppEngineServiceNetworkSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig">AppEngineServiceNetworkSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig">AppEngineServiceNetworkSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putNetworkSettings">PutNetworkSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkSettings` <a name="PutNetworkSettings" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putNetworkSettings"></a>

```csharp
private void PutNetworkSettings(AppEngineServiceNetworkSettingsNetworkSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putNetworkSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putTimeouts"></a>

```csharp
private void PutTimeouts(AppEngineServiceNetworkSettingsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppEngineServiceNetworkSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AppEngineServiceNetworkSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AppEngineServiceNetworkSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AppEngineServiceNetworkSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

AppEngineServiceNetworkSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppEngineServiceNetworkSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppEngineServiceNetworkSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppEngineServiceNetworkSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/app_engine_service_network_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppEngineServiceNetworkSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.networkSettings">NetworkSettings</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference">AppEngineServiceNetworkSettingsNetworkSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference">AppEngineServiceNetworkSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.networkSettingsInput">NetworkSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `NetworkSettings`<sup>Required</sup> <a name="NetworkSettings" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.networkSettings"></a>

```csharp
public AppEngineServiceNetworkSettingsNetworkSettingsOutputReference NetworkSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference">AppEngineServiceNetworkSettingsNetworkSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.timeouts"></a>

```csharp
public AppEngineServiceNetworkSettingsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference">AppEngineServiceNetworkSettingsTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkSettingsInput`<sup>Optional</sup> <a name="NetworkSettingsInput" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.networkSettingsInput"></a>

```csharp
public AppEngineServiceNetworkSettingsNetworkSettings NetworkSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineServiceNetworkSettingsConfig <a name="AppEngineServiceNetworkSettingsConfig" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineServiceNetworkSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    AppEngineServiceNetworkSettingsNetworkSettings NetworkSettings,
    string Service,
    string Id = null,
    string Project = null,
    AppEngineServiceNetworkSettingsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.networkSettings">NetworkSettings</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a></code> | network_settings block. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.service">Service</a></code> | <code>string</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/app_engine_service_network_settings#id AppEngineServiceNetworkSettings#id}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/app_engine_service_network_settings#project AppEngineServiceNetworkSettings#project}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `NetworkSettings`<sup>Required</sup> <a name="NetworkSettings" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.networkSettings"></a>

```csharp
public AppEngineServiceNetworkSettingsNetworkSettings NetworkSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a>

network_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/app_engine_service_network_settings#network_settings AppEngineServiceNetworkSettings#network_settings}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/app_engine_service_network_settings#service AppEngineServiceNetworkSettings#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/app_engine_service_network_settings#id AppEngineServiceNetworkSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/app_engine_service_network_settings#project AppEngineServiceNetworkSettings#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsConfig.property.timeouts"></a>

```csharp
public AppEngineServiceNetworkSettingsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts">AppEngineServiceNetworkSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/app_engine_service_network_settings#timeouts AppEngineServiceNetworkSettings#timeouts}

---

### AppEngineServiceNetworkSettingsNetworkSettings <a name="AppEngineServiceNetworkSettingsNetworkSettings" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineServiceNetworkSettingsNetworkSettings {
    string IngressTrafficAllowed = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings.property.ingressTrafficAllowed">IngressTrafficAllowed</a></code> | <code>string</code> | The ingress settings for version or service. Default value: "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED" Possible values: ["INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED", "INGRESS_TRAFFIC_ALLOWED_ALL", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"]. |

---

##### `IngressTrafficAllowed`<sup>Optional</sup> <a name="IngressTrafficAllowed" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings.property.ingressTrafficAllowed"></a>

```csharp
public string IngressTrafficAllowed { get; set; }
```

- *Type:* string

The ingress settings for version or service. Default value: "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED" Possible values: ["INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED", "INGRESS_TRAFFIC_ALLOWED_ALL", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/app_engine_service_network_settings#ingress_traffic_allowed AppEngineServiceNetworkSettings#ingress_traffic_allowed}

---

### AppEngineServiceNetworkSettingsTimeouts <a name="AppEngineServiceNetworkSettingsTimeouts" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineServiceNetworkSettingsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/app_engine_service_network_settings#create AppEngineServiceNetworkSettings#create}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/app_engine_service_network_settings#delete AppEngineServiceNetworkSettings#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/app_engine_service_network_settings#update AppEngineServiceNetworkSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/app_engine_service_network_settings#create AppEngineServiceNetworkSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/app_engine_service_network_settings#delete AppEngineServiceNetworkSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/app_engine_service_network_settings#update AppEngineServiceNetworkSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineServiceNetworkSettingsNetworkSettingsOutputReference <a name="AppEngineServiceNetworkSettingsNetworkSettingsOutputReference" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineServiceNetworkSettingsNetworkSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resetIngressTrafficAllowed">ResetIngressTrafficAllowed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIngressTrafficAllowed` <a name="ResetIngressTrafficAllowed" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resetIngressTrafficAllowed"></a>

```csharp
private void ResetIngressTrafficAllowed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowedInput">IngressTrafficAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowed">IngressTrafficAllowed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngressTrafficAllowedInput`<sup>Optional</sup> <a name="IngressTrafficAllowedInput" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowedInput"></a>

```csharp
public string IngressTrafficAllowedInput { get; }
```

- *Type:* string

---

##### `IngressTrafficAllowed`<sup>Required</sup> <a name="IngressTrafficAllowed" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowed"></a>

```csharp
public string IngressTrafficAllowed { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.internalValue"></a>

```csharp
public AppEngineServiceNetworkSettingsNetworkSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsNetworkSettings">AppEngineServiceNetworkSettingsNetworkSettings</a>

---


### AppEngineServiceNetworkSettingsTimeoutsOutputReference <a name="AppEngineServiceNetworkSettingsTimeoutsOutputReference" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new AppEngineServiceNetworkSettingsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.appEngineServiceNetworkSettings.AppEngineServiceNetworkSettingsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



