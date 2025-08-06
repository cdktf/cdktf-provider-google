# `iapSettings` Submodule <a name="`iapSettings` Submodule" id="@cdktf/provider-google.iapSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapSettings <a name="IapSettings" id="@cdktf/provider-google.iapSettings.IapSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings google_iap_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettings(Construct Scope, string Id, IapSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig">IapSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig">IapSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.putAccessSettings">PutAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.putApplicationSettings">PutApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.resetAccessSettings">ResetAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.resetApplicationSettings">ResetApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapSettings.IapSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iapSettings.IapSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.iapSettings.IapSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapSettings.IapSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iapSettings.IapSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.iapSettings.IapSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iapSettings.IapSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.iapSettings.IapSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iapSettings.IapSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iapSettings.IapSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.iapSettings.IapSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iapSettings.IapSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.iapSettings.IapSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.iapSettings.IapSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iapSettings.IapSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapSettings.IapSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.iapSettings.IapSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iapSettings.IapSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.iapSettings.IapSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iapSettings.IapSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.iapSettings.IapSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.iapSettings.IapSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iapSettings.IapSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessSettings` <a name="PutAccessSettings" id="@cdktf/provider-google.iapSettings.IapSettings.putAccessSettings"></a>

```csharp
private void PutAccessSettings(IapSettingsAccessSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapSettings.IapSettings.putAccessSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a>

---

##### `PutApplicationSettings` <a name="PutApplicationSettings" id="@cdktf/provider-google.iapSettings.IapSettings.putApplicationSettings"></a>

```csharp
private void PutApplicationSettings(IapSettingsApplicationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapSettings.IapSettings.putApplicationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.iapSettings.IapSettings.putTimeouts"></a>

```csharp
private void PutTimeouts(IapSettingsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapSettings.IapSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a>

---

##### `ResetAccessSettings` <a name="ResetAccessSettings" id="@cdktf/provider-google.iapSettings.IapSettings.resetAccessSettings"></a>

```csharp
private void ResetAccessSettings()
```

##### `ResetApplicationSettings` <a name="ResetApplicationSettings" id="@cdktf/provider-google.iapSettings.IapSettings.resetApplicationSettings"></a>

```csharp
private void ResetApplicationSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iapSettings.IapSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.iapSettings.IapSettings.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IapSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iapSettings.IapSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IapSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iapSettings.IapSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iapSettings.IapSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IapSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iapSettings.IapSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iapSettings.IapSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IapSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iapSettings.IapSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IapSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IapSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IapSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IapSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IapSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.accessSettings">AccessSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference">IapSettingsAccessSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.applicationSettings">ApplicationSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference">IapSettingsApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference">IapSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.accessSettingsInput">AccessSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.applicationSettingsInput">ApplicationSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iapSettings.IapSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iapSettings.IapSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapSettings.IapSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iapSettings.IapSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iapSettings.IapSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iapSettings.IapSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iapSettings.IapSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iapSettings.IapSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iapSettings.IapSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iapSettings.IapSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iapSettings.IapSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iapSettings.IapSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapSettings.IapSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iapSettings.IapSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessSettings`<sup>Required</sup> <a name="AccessSettings" id="@cdktf/provider-google.iapSettings.IapSettings.property.accessSettings"></a>

```csharp
public IapSettingsAccessSettingsOutputReference AccessSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference">IapSettingsAccessSettingsOutputReference</a>

---

##### `ApplicationSettings`<sup>Required</sup> <a name="ApplicationSettings" id="@cdktf/provider-google.iapSettings.IapSettings.property.applicationSettings"></a>

```csharp
public IapSettingsApplicationSettingsOutputReference ApplicationSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference">IapSettingsApplicationSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.iapSettings.IapSettings.property.timeouts"></a>

```csharp
public IapSettingsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference">IapSettingsTimeoutsOutputReference</a>

---

##### `AccessSettingsInput`<sup>Optional</sup> <a name="AccessSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettings.property.accessSettingsInput"></a>

```csharp
public IapSettingsAccessSettings AccessSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a>

---

##### `ApplicationSettingsInput`<sup>Optional</sup> <a name="ApplicationSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettings.property.applicationSettingsInput"></a>

```csharp
public IapSettingsApplicationSettings ApplicationSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iapSettings.IapSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.iapSettings.IapSettings.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.iapSettings.IapSettings.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iapSettings.IapSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.iapSettings.IapSettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iapSettings.IapSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IapSettingsAccessSettings <a name="IapSettingsAccessSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsAccessSettings {
    IapSettingsAccessSettingsAllowedDomainsSettings AllowedDomainsSettings = null,
    IapSettingsAccessSettingsCorsSettings CorsSettings = null,
    IapSettingsAccessSettingsGcipSettings GcipSettings = null,
    string[] IdentitySources = null,
    IapSettingsAccessSettingsOauthSettings OauthSettings = null,
    IapSettingsAccessSettingsReauthSettings ReauthSettings = null,
    IapSettingsAccessSettingsWorkforceIdentitySettings WorkforceIdentitySettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.allowedDomainsSettings">AllowedDomainsSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a></code> | allowed_domains_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.corsSettings">CorsSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a></code> | cors_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.gcipSettings">GcipSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a></code> | gcip_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.identitySources">IdentitySources</a></code> | <code>string[]</code> | Identity sources that IAP can use to authenticate the end user. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.oauthSettings">OauthSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a></code> | oauth_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.reauthSettings">ReauthSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a></code> | reauth_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.workforceIdentitySettings">WorkforceIdentitySettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | workforce_identity_settings block. |

---

##### `AllowedDomainsSettings`<sup>Optional</sup> <a name="AllowedDomainsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.allowedDomainsSettings"></a>

```csharp
public IapSettingsAccessSettingsAllowedDomainsSettings AllowedDomainsSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a>

allowed_domains_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#allowed_domains_settings IapSettings#allowed_domains_settings}

---

##### `CorsSettings`<sup>Optional</sup> <a name="CorsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.corsSettings"></a>

```csharp
public IapSettingsAccessSettingsCorsSettings CorsSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a>

cors_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#cors_settings IapSettings#cors_settings}

---

##### `GcipSettings`<sup>Optional</sup> <a name="GcipSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.gcipSettings"></a>

```csharp
public IapSettingsAccessSettingsGcipSettings GcipSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a>

gcip_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#gcip_settings IapSettings#gcip_settings}

---

##### `IdentitySources`<sup>Optional</sup> <a name="IdentitySources" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.identitySources"></a>

```csharp
public string[] IdentitySources { get; set; }
```

- *Type:* string[]

Identity sources that IAP can use to authenticate the end user.

Only one identity source
can be configured. The possible values are:

* 'WORKFORCE_IDENTITY_FEDERATION': Use external identities set up on Google Cloud Workforce
  Identity Federation. Possible values: ["WORKFORCE_IDENTITY_FEDERATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#identity_sources IapSettings#identity_sources}

---

##### `OauthSettings`<sup>Optional</sup> <a name="OauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.oauthSettings"></a>

```csharp
public IapSettingsAccessSettingsOauthSettings OauthSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a>

oauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#oauth_settings IapSettings#oauth_settings}

---

##### `ReauthSettings`<sup>Optional</sup> <a name="ReauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.reauthSettings"></a>

```csharp
public IapSettingsAccessSettingsReauthSettings ReauthSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a>

reauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#reauth_settings IapSettings#reauth_settings}

---

##### `WorkforceIdentitySettings`<sup>Optional</sup> <a name="WorkforceIdentitySettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.workforceIdentitySettings"></a>

```csharp
public IapSettingsAccessSettingsWorkforceIdentitySettings WorkforceIdentitySettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a>

workforce_identity_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#workforce_identity_settings IapSettings#workforce_identity_settings}

---

### IapSettingsAccessSettingsAllowedDomainsSettings <a name="IapSettingsAccessSettingsAllowedDomainsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsAccessSettingsAllowedDomainsSettings {
    string[] Domains = null,
    object Enable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings.property.domains">Domains</a></code> | <code>string[]</code> | List of trusted domains. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings.property.enable">Enable</a></code> | <code>object</code> | Configuration for customers to opt in for the feature. |

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings.property.domains"></a>

```csharp
public string[] Domains { get; set; }
```

- *Type:* string[]

List of trusted domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#domains IapSettings#domains}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Configuration for customers to opt in for the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#enable IapSettings#enable}

---

### IapSettingsAccessSettingsCorsSettings <a name="IapSettingsAccessSettingsCorsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsAccessSettingsCorsSettings {
    object AllowHttpOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings.property.allowHttpOptions">AllowHttpOptions</a></code> | <code>object</code> | Configuration to allow HTTP OPTIONS calls to skip authorization. |

---

##### `AllowHttpOptions`<sup>Optional</sup> <a name="AllowHttpOptions" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings.property.allowHttpOptions"></a>

```csharp
public object AllowHttpOptions { get; set; }
```

- *Type:* object

Configuration to allow HTTP OPTIONS calls to skip authorization.

If undefined, IAP will not apply any special logic to OPTIONS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#allow_http_options IapSettings#allow_http_options}

---

### IapSettingsAccessSettingsGcipSettings <a name="IapSettingsAccessSettingsGcipSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsAccessSettingsGcipSettings {
    string LoginPageUri = null,
    string[] TenantIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings.property.loginPageUri">LoginPageUri</a></code> | <code>string</code> | Login page URI associated with the GCIP tenants. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings.property.tenantIds">TenantIds</a></code> | <code>string[]</code> | GCIP tenant ids that are linked to the IAP resource. |

---

##### `LoginPageUri`<sup>Optional</sup> <a name="LoginPageUri" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings.property.loginPageUri"></a>

```csharp
public string LoginPageUri { get; set; }
```

- *Type:* string

Login page URI associated with the GCIP tenants.

Typically, all resources within
the same project share the same login page, though it could be overridden at the
sub resource level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#login_page_uri IapSettings#login_page_uri}

---

##### `TenantIds`<sup>Optional</sup> <a name="TenantIds" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings.property.tenantIds"></a>

```csharp
public string[] TenantIds { get; set; }
```

- *Type:* string[]

GCIP tenant ids that are linked to the IAP resource.

tenantIds could be a string
beginning with a number character to indicate authenticating with GCIP tenant flow,
or in the format of _ to indicate authenticating with GCIP agent flow. If agent flow
is used, tenantIds should only contain one single element, while for tenant flow,
tenantIds can contain multiple elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#tenant_ids IapSettings#tenant_ids}

---

### IapSettingsAccessSettingsOauthSettings <a name="IapSettingsAccessSettingsOauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsAccessSettingsOauthSettings {
    string LoginHint = null,
    string[] ProgrammaticClients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings.property.loginHint">LoginHint</a></code> | <code>string</code> | Domain hint to send as hd=? |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings.property.programmaticClients">ProgrammaticClients</a></code> | <code>string[]</code> | List of client ids allowed to use IAP programmatically. |

---

##### `LoginHint`<sup>Optional</sup> <a name="LoginHint" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings.property.loginHint"></a>

```csharp
public string LoginHint { get; set; }
```

- *Type:* string

Domain hint to send as hd=?

parameter in OAuth request flow.
Enables redirect to primary IDP by skipping Google's login screen.
(https://developers.google.com/identity/protocols/OpenIDConnect#hd-param)
Note: IAP does not verify that the id token's hd claim matches this value
since access behavior is managed by IAM policies.

* loginHint setting is not a replacement for access control. Always enforce an appropriate access policy if you want to restrict access to users outside your domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#login_hint IapSettings#login_hint}

---

##### `ProgrammaticClients`<sup>Optional</sup> <a name="ProgrammaticClients" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings.property.programmaticClients"></a>

```csharp
public string[] ProgrammaticClients { get; set; }
```

- *Type:* string[]

List of client ids allowed to use IAP programmatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#programmatic_clients IapSettings#programmatic_clients}

---

### IapSettingsAccessSettingsReauthSettings <a name="IapSettingsAccessSettingsReauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsAccessSettingsReauthSettings {
    string MaxAge,
    string Method,
    string PolicyType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.maxAge">MaxAge</a></code> | <code>string</code> | Reauth session lifetime, how long before a user has to reauthenticate again. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.method">Method</a></code> | <code>string</code> | Reauth method requested. The possible values are:. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.policyType">PolicyType</a></code> | <code>string</code> | How IAP determines the effective policy in cases of hierarchical policies. |

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.maxAge"></a>

```csharp
public string MaxAge { get; set; }
```

- *Type:* string

Reauth session lifetime, how long before a user has to reauthenticate again.

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#max_age IapSettings#max_age}

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Reauth method requested. The possible values are:.

* 'LOGIN': Prompts the user to log in again.
* 'SECURE_KEY': User must use their secure key 2nd factor device.
* 'ENROLLED_SECOND_FACTORS': User can use any enabled 2nd factor. Possible values: ["LOGIN", "SECURE_KEY", "ENROLLED_SECOND_FACTORS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#method IapSettings#method}

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

How IAP determines the effective policy in cases of hierarchical policies.

Policies are merged from higher in the hierarchy to lower in the hierarchy.
The possible values are:

* 'MINIMUM': This policy acts as a minimum to other policies, lower in the hierarchy.
  Effective policy may only be the same or stricter.
* 'DEFAULT': This policy acts as a default if no other reauth policy is set. Possible values: ["MINIMUM", "DEFAULT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#policy_type IapSettings#policy_type}

---

### IapSettingsAccessSettingsWorkforceIdentitySettings <a name="IapSettingsAccessSettingsWorkforceIdentitySettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsAccessSettingsWorkforceIdentitySettings {
    IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 Oauth2 = null,
    string[] WorkforcePools = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings.property.oauth2">Oauth2</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | oauth2 block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings.property.workforcePools">WorkforcePools</a></code> | <code>string[]</code> | The workforce pool resources. Only one workforce pool is accepted. |

---

##### `Oauth2`<sup>Optional</sup> <a name="Oauth2" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings.property.oauth2"></a>

```csharp
public IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 Oauth2 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

oauth2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#oauth2 IapSettings#oauth2}

---

##### `WorkforcePools`<sup>Optional</sup> <a name="WorkforcePools" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings.property.workforcePools"></a>

```csharp
public string[] WorkforcePools { get; set; }
```

- *Type:* string[]

The workforce pool resources. Only one workforce pool is accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#workforce_pools IapSettings#workforce_pools}

---

### IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 <a name="IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 {
    string ClientId = null,
    string ClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientId">ClientId</a></code> | <code>string</code> | The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Input only. The OAuth 2.0 client secret created while registering the client ID. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#client_id IapSettings#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Input only. The OAuth 2.0 client secret created while registering the client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#client_secret IapSettings#client_secret}

---

### IapSettingsApplicationSettings <a name="IapSettingsApplicationSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsApplicationSettings {
    IapSettingsApplicationSettingsAccessDeniedPageSettings AccessDeniedPageSettings = null,
    IapSettingsApplicationSettingsAttributePropagationSettings AttributePropagationSettings = null,
    string CookieDomain = null,
    IapSettingsApplicationSettingsCsmSettings CsmSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.accessDeniedPageSettings">AccessDeniedPageSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | access_denied_page_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.attributePropagationSettings">AttributePropagationSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a></code> | attribute_propagation_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.cookieDomain">CookieDomain</a></code> | <code>string</code> | The Domain value to set for cookies generated by IAP. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.csmSettings">CsmSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a></code> | csm_settings block. |

---

##### `AccessDeniedPageSettings`<sup>Optional</sup> <a name="AccessDeniedPageSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.accessDeniedPageSettings"></a>

```csharp
public IapSettingsApplicationSettingsAccessDeniedPageSettings AccessDeniedPageSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a>

access_denied_page_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#access_denied_page_settings IapSettings#access_denied_page_settings}

---

##### `AttributePropagationSettings`<sup>Optional</sup> <a name="AttributePropagationSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.attributePropagationSettings"></a>

```csharp
public IapSettingsApplicationSettingsAttributePropagationSettings AttributePropagationSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a>

attribute_propagation_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#attribute_propagation_settings IapSettings#attribute_propagation_settings}

---

##### `CookieDomain`<sup>Optional</sup> <a name="CookieDomain" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.cookieDomain"></a>

```csharp
public string CookieDomain { get; set; }
```

- *Type:* string

The Domain value to set for cookies generated by IAP.

This value is not validated by the API,
but will be ignored at runtime if invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#cookie_domain IapSettings#cookie_domain}

---

##### `CsmSettings`<sup>Optional</sup> <a name="CsmSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.csmSettings"></a>

```csharp
public IapSettingsApplicationSettingsCsmSettings CsmSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a>

csm_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#csm_settings IapSettings#csm_settings}

---

### IapSettingsApplicationSettingsAccessDeniedPageSettings <a name="IapSettingsApplicationSettingsAccessDeniedPageSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsApplicationSettingsAccessDeniedPageSettings {
    string AccessDeniedPageUri = null,
    object GenerateTroubleshootingUri = null,
    object RemediationTokenGenerationEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.accessDeniedPageUri">AccessDeniedPageUri</a></code> | <code>string</code> | The URI to be redirected to when access is denied. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.generateTroubleshootingUri">GenerateTroubleshootingUri</a></code> | <code>object</code> | Whether to generate a troubleshooting URL on access denied events to this application. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.remediationTokenGenerationEnabled">RemediationTokenGenerationEnabled</a></code> | <code>object</code> | Whether to generate remediation token on access denied events to this application. |

---

##### `AccessDeniedPageUri`<sup>Optional</sup> <a name="AccessDeniedPageUri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.accessDeniedPageUri"></a>

```csharp
public string AccessDeniedPageUri { get; set; }
```

- *Type:* string

The URI to be redirected to when access is denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#access_denied_page_uri IapSettings#access_denied_page_uri}

---

##### `GenerateTroubleshootingUri`<sup>Optional</sup> <a name="GenerateTroubleshootingUri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.generateTroubleshootingUri"></a>

```csharp
public object GenerateTroubleshootingUri { get; set; }
```

- *Type:* object

Whether to generate a troubleshooting URL on access denied events to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#generate_troubleshooting_uri IapSettings#generate_troubleshooting_uri}

---

##### `RemediationTokenGenerationEnabled`<sup>Optional</sup> <a name="RemediationTokenGenerationEnabled" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.remediationTokenGenerationEnabled"></a>

```csharp
public object RemediationTokenGenerationEnabled { get; set; }
```

- *Type:* object

Whether to generate remediation token on access denied events to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#remediation_token_generation_enabled IapSettings#remediation_token_generation_enabled}

---

### IapSettingsApplicationSettingsAttributePropagationSettings <a name="IapSettingsApplicationSettingsAttributePropagationSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsApplicationSettingsAttributePropagationSettings {
    object Enable = null,
    string Expression = null,
    string[] OutputCredentials = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.enable">Enable</a></code> | <code>object</code> | Whether the provided attribute propagation settings should be evaluated on user requests. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.expression">Expression</a></code> | <code>string</code> | Raw string CEL expression. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.outputCredentials">OutputCredentials</a></code> | <code>string[]</code> | Which output credentials attributes selected by the CEL expression should be propagated in. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Whether the provided attribute propagation settings should be evaluated on user requests.

If set to true, attributes returned from the expression will be propagated in the set output credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#enable IapSettings#enable}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Raw string CEL expression.

Must return a list of attributes. A maximum of 45 attributes can
be selected. Expressions can select different attribute types from attributes:
attributes.saml_attributes, attributes.iap_attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#expression IapSettings#expression}

---

##### `OutputCredentials`<sup>Optional</sup> <a name="OutputCredentials" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.outputCredentials"></a>

```csharp
public string[] OutputCredentials { get; set; }
```

- *Type:* string[]

Which output credentials attributes selected by the CEL expression should be propagated in.

All attributes will be fully duplicated in each selected output credential.
Possible values are:

* 'HEADER': Propagate attributes in the headers with "x-goog-iap-attr-" prefix.
* 'JWT': Propagate attributes in the JWT of the form:
  "additional_claims": { "my_attribute": ["value1", "value2"] }
* 'RCTOKEN': Propagate attributes in the RCToken of the form: "
  additional_claims": { "my_attribute": ["value1", "value2"] } Possible values: ["HEADER", "JWT", "RCTOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#output_credentials IapSettings#output_credentials}

---

### IapSettingsApplicationSettingsCsmSettings <a name="IapSettingsApplicationSettingsCsmSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsApplicationSettingsCsmSettings {
    string RctokenAud = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings.property.rctokenAud">RctokenAud</a></code> | <code>string</code> | Audience claim set in the generated RCToken. This value is not validated by IAP. |

---

##### `RctokenAud`<sup>Optional</sup> <a name="RctokenAud" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings.property.rctokenAud"></a>

```csharp
public string RctokenAud { get; set; }
```

- *Type:* string

Audience claim set in the generated RCToken. This value is not validated by IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#rctoken_aud IapSettings#rctoken_aud}

---

### IapSettingsConfig <a name="IapSettingsConfig" id="@cdktf/provider-google.iapSettings.IapSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    IapSettingsAccessSettings AccessSettings = null,
    IapSettingsApplicationSettings ApplicationSettings = null,
    string Id = null,
    IapSettingsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the IAP protected resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.accessSettings">AccessSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.applicationSettings">ApplicationSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a></code> | application_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#id IapSettings#id}. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the IAP protected resource.

Name can have below resources:

* organizations/{organization_id}
* folders/{folder_id}
* projects/{project_id}
* projects/{project_id}/iap_web
* projects/{project_id}/iap_web/compute
* projects/{project_id}/iap_web/compute-{region}
* projects/{project_id}/iap_web/compute/services/{service_id}
* projects/{project_id}/iap_web/compute-{region}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}/version/{version_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#name IapSettings#name}

---

##### `AccessSettings`<sup>Optional</sup> <a name="AccessSettings" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.accessSettings"></a>

```csharp
public IapSettingsAccessSettings AccessSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#access_settings IapSettings#access_settings}

---

##### `ApplicationSettings`<sup>Optional</sup> <a name="ApplicationSettings" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.applicationSettings"></a>

```csharp
public IapSettingsApplicationSettings ApplicationSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a>

application_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#application_settings IapSettings#application_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#id IapSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.timeouts"></a>

```csharp
public IapSettingsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#timeouts IapSettings#timeouts}

---

### IapSettingsTimeouts <a name="IapSettingsTimeouts" id="@cdktf/provider-google.iapSettings.IapSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#create IapSettings#create}. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#delete IapSettings#delete}. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#update IapSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#create IapSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#delete IapSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/iap_settings#update IapSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference <a name="IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetDomains">ResetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomains` <a name="ResetDomains" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetDomains"></a>

```csharp
private void ResetDomains()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domainsInput">DomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domainsInput"></a>

```csharp
public string[] DomainsInput { get; }
```

- *Type:* string[]

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.internalValue"></a>

```csharp
public IapSettingsAccessSettingsAllowedDomainsSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a>

---


### IapSettingsAccessSettingsCorsSettingsOutputReference <a name="IapSettingsAccessSettingsCorsSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsAccessSettingsCorsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.resetAllowHttpOptions">ResetAllowHttpOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowHttpOptions` <a name="ResetAllowHttpOptions" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.resetAllowHttpOptions"></a>

```csharp
private void ResetAllowHttpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptionsInput">AllowHttpOptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptions">AllowHttpOptions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowHttpOptionsInput`<sup>Optional</sup> <a name="AllowHttpOptionsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptionsInput"></a>

```csharp
public object AllowHttpOptionsInput { get; }
```

- *Type:* object

---

##### `AllowHttpOptions`<sup>Required</sup> <a name="AllowHttpOptions" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptions"></a>

```csharp
public object AllowHttpOptions { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.internalValue"></a>

```csharp
public IapSettingsAccessSettingsCorsSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a>

---


### IapSettingsAccessSettingsGcipSettingsOutputReference <a name="IapSettingsAccessSettingsGcipSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsAccessSettingsGcipSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resetLoginPageUri">ResetLoginPageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resetTenantIds">ResetTenantIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoginPageUri` <a name="ResetLoginPageUri" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resetLoginPageUri"></a>

```csharp
private void ResetLoginPageUri()
```

##### `ResetTenantIds` <a name="ResetTenantIds" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resetTenantIds"></a>

```csharp
private void ResetTenantIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUriInput">LoginPageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIdsInput">TenantIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUri">LoginPageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIds">TenantIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoginPageUriInput`<sup>Optional</sup> <a name="LoginPageUriInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUriInput"></a>

```csharp
public string LoginPageUriInput { get; }
```

- *Type:* string

---

##### `TenantIdsInput`<sup>Optional</sup> <a name="TenantIdsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIdsInput"></a>

```csharp
public string[] TenantIdsInput { get; }
```

- *Type:* string[]

---

##### `LoginPageUri`<sup>Required</sup> <a name="LoginPageUri" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUri"></a>

```csharp
public string LoginPageUri { get; }
```

- *Type:* string

---

##### `TenantIds`<sup>Required</sup> <a name="TenantIds" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIds"></a>

```csharp
public string[] TenantIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.internalValue"></a>

```csharp
public IapSettingsAccessSettingsGcipSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a>

---


### IapSettingsAccessSettingsOauthSettingsOutputReference <a name="IapSettingsAccessSettingsOauthSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsAccessSettingsOauthSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resetLoginHint">ResetLoginHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resetProgrammaticClients">ResetProgrammaticClients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoginHint` <a name="ResetLoginHint" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resetLoginHint"></a>

```csharp
private void ResetLoginHint()
```

##### `ResetProgrammaticClients` <a name="ResetProgrammaticClients" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resetProgrammaticClients"></a>

```csharp
private void ResetProgrammaticClients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHintInput">LoginHintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClientsInput">ProgrammaticClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHint">LoginHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClients">ProgrammaticClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoginHintInput`<sup>Optional</sup> <a name="LoginHintInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHintInput"></a>

```csharp
public string LoginHintInput { get; }
```

- *Type:* string

---

##### `ProgrammaticClientsInput`<sup>Optional</sup> <a name="ProgrammaticClientsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClientsInput"></a>

```csharp
public string[] ProgrammaticClientsInput { get; }
```

- *Type:* string[]

---

##### `LoginHint`<sup>Required</sup> <a name="LoginHint" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHint"></a>

```csharp
public string LoginHint { get; }
```

- *Type:* string

---

##### `ProgrammaticClients`<sup>Required</sup> <a name="ProgrammaticClients" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClients"></a>

```csharp
public string[] ProgrammaticClients { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.internalValue"></a>

```csharp
public IapSettingsAccessSettingsOauthSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a>

---


### IapSettingsAccessSettingsOutputReference <a name="IapSettingsAccessSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsAccessSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings">PutAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putCorsSettings">PutCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putGcipSettings">PutGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putOauthSettings">PutOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putReauthSettings">PutReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings">PutWorkforceIdentitySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetAllowedDomainsSettings">ResetAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetCorsSettings">ResetCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetGcipSettings">ResetGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetIdentitySources">ResetIdentitySources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetOauthSettings">ResetOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetReauthSettings">ResetReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetWorkforceIdentitySettings">ResetWorkforceIdentitySettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedDomainsSettings` <a name="PutAllowedDomainsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings"></a>

```csharp
private void PutAllowedDomainsSettings(IapSettingsAccessSettingsAllowedDomainsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a>

---

##### `PutCorsSettings` <a name="PutCorsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putCorsSettings"></a>

```csharp
private void PutCorsSettings(IapSettingsAccessSettingsCorsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putCorsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a>

---

##### `PutGcipSettings` <a name="PutGcipSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putGcipSettings"></a>

```csharp
private void PutGcipSettings(IapSettingsAccessSettingsGcipSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putGcipSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a>

---

##### `PutOauthSettings` <a name="PutOauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putOauthSettings"></a>

```csharp
private void PutOauthSettings(IapSettingsAccessSettingsOauthSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putOauthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a>

---

##### `PutReauthSettings` <a name="PutReauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putReauthSettings"></a>

```csharp
private void PutReauthSettings(IapSettingsAccessSettingsReauthSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putReauthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a>

---

##### `PutWorkforceIdentitySettings` <a name="PutWorkforceIdentitySettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings"></a>

```csharp
private void PutWorkforceIdentitySettings(IapSettingsAccessSettingsWorkforceIdentitySettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a>

---

##### `ResetAllowedDomainsSettings` <a name="ResetAllowedDomainsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetAllowedDomainsSettings"></a>

```csharp
private void ResetAllowedDomainsSettings()
```

##### `ResetCorsSettings` <a name="ResetCorsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetCorsSettings"></a>

```csharp
private void ResetCorsSettings()
```

##### `ResetGcipSettings` <a name="ResetGcipSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetGcipSettings"></a>

```csharp
private void ResetGcipSettings()
```

##### `ResetIdentitySources` <a name="ResetIdentitySources" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetIdentitySources"></a>

```csharp
private void ResetIdentitySources()
```

##### `ResetOauthSettings` <a name="ResetOauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetOauthSettings"></a>

```csharp
private void ResetOauthSettings()
```

##### `ResetReauthSettings` <a name="ResetReauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetReauthSettings"></a>

```csharp
private void ResetReauthSettings()
```

##### `ResetWorkforceIdentitySettings` <a name="ResetWorkforceIdentitySettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetWorkforceIdentitySettings"></a>

```csharp
private void ResetWorkforceIdentitySettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.allowedDomainsSettings">AllowedDomainsSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference">IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.corsSettings">CorsSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference">IapSettingsAccessSettingsCorsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.gcipSettings">GcipSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference">IapSettingsAccessSettingsGcipSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.oauthSettings">OauthSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference">IapSettingsAccessSettingsOauthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.reauthSettings">ReauthSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference">IapSettingsAccessSettingsReauthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.workforceIdentitySettings">WorkforceIdentitySettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference">IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.allowedDomainsSettingsInput">AllowedDomainsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.corsSettingsInput">CorsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.gcipSettingsInput">GcipSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.identitySourcesInput">IdentitySourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.oauthSettingsInput">OauthSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.reauthSettingsInput">ReauthSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.workforceIdentitySettingsInput">WorkforceIdentitySettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.identitySources">IdentitySources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedDomainsSettings`<sup>Required</sup> <a name="AllowedDomainsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.allowedDomainsSettings"></a>

```csharp
public IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference AllowedDomainsSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference">IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference</a>

---

##### `CorsSettings`<sup>Required</sup> <a name="CorsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.corsSettings"></a>

```csharp
public IapSettingsAccessSettingsCorsSettingsOutputReference CorsSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference">IapSettingsAccessSettingsCorsSettingsOutputReference</a>

---

##### `GcipSettings`<sup>Required</sup> <a name="GcipSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.gcipSettings"></a>

```csharp
public IapSettingsAccessSettingsGcipSettingsOutputReference GcipSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference">IapSettingsAccessSettingsGcipSettingsOutputReference</a>

---

##### `OauthSettings`<sup>Required</sup> <a name="OauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.oauthSettings"></a>

```csharp
public IapSettingsAccessSettingsOauthSettingsOutputReference OauthSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference">IapSettingsAccessSettingsOauthSettingsOutputReference</a>

---

##### `ReauthSettings`<sup>Required</sup> <a name="ReauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.reauthSettings"></a>

```csharp
public IapSettingsAccessSettingsReauthSettingsOutputReference ReauthSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference">IapSettingsAccessSettingsReauthSettingsOutputReference</a>

---

##### `WorkforceIdentitySettings`<sup>Required</sup> <a name="WorkforceIdentitySettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.workforceIdentitySettings"></a>

```csharp
public IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference WorkforceIdentitySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference">IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference</a>

---

##### `AllowedDomainsSettingsInput`<sup>Optional</sup> <a name="AllowedDomainsSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.allowedDomainsSettingsInput"></a>

```csharp
public IapSettingsAccessSettingsAllowedDomainsSettings AllowedDomainsSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a>

---

##### `CorsSettingsInput`<sup>Optional</sup> <a name="CorsSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.corsSettingsInput"></a>

```csharp
public IapSettingsAccessSettingsCorsSettings CorsSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a>

---

##### `GcipSettingsInput`<sup>Optional</sup> <a name="GcipSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.gcipSettingsInput"></a>

```csharp
public IapSettingsAccessSettingsGcipSettings GcipSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a>

---

##### `IdentitySourcesInput`<sup>Optional</sup> <a name="IdentitySourcesInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.identitySourcesInput"></a>

```csharp
public string[] IdentitySourcesInput { get; }
```

- *Type:* string[]

---

##### `OauthSettingsInput`<sup>Optional</sup> <a name="OauthSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.oauthSettingsInput"></a>

```csharp
public IapSettingsAccessSettingsOauthSettings OauthSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a>

---

##### `ReauthSettingsInput`<sup>Optional</sup> <a name="ReauthSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.reauthSettingsInput"></a>

```csharp
public IapSettingsAccessSettingsReauthSettings ReauthSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a>

---

##### `WorkforceIdentitySettingsInput`<sup>Optional</sup> <a name="WorkforceIdentitySettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.workforceIdentitySettingsInput"></a>

```csharp
public IapSettingsAccessSettingsWorkforceIdentitySettings WorkforceIdentitySettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a>

---

##### `IdentitySources`<sup>Required</sup> <a name="IdentitySources" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.identitySources"></a>

```csharp
public string[] IdentitySources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.internalValue"></a>

```csharp
public IapSettingsAccessSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a>

---


### IapSettingsAccessSettingsReauthSettingsOutputReference <a name="IapSettingsAccessSettingsReauthSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsAccessSettingsReauthSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAge">MaxAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAgeInput"></a>

```csharp
public string MaxAgeInput { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAge"></a>

```csharp
public string MaxAge { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.internalValue"></a>

```csharp
public IapSettingsAccessSettingsReauthSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a>

---


### IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference <a name="IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretSha256">ClientSecretSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientSecretSha256`<sup>Required</sup> <a name="ClientSecretSha256" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretSha256"></a>

```csharp
public string ClientSecretSha256 { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.internalValue"></a>

```csharp
public IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---


### IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference <a name="IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2">PutOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetOauth2">ResetOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetWorkforcePools">ResetWorkforcePools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauth2` <a name="PutOauth2" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2"></a>

```csharp
private void PutOauth2(IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---

##### `ResetOauth2` <a name="ResetOauth2" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetOauth2"></a>

```csharp
private void ResetOauth2()
```

##### `ResetWorkforcePools` <a name="ResetWorkforcePools" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetWorkforcePools"></a>

```csharp
private void ResetWorkforcePools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2">Oauth2</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2Input">Oauth2Input</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePoolsInput">WorkforcePoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePools">WorkforcePools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Oauth2`<sup>Required</sup> <a name="Oauth2" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2"></a>

```csharp
public IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference Oauth2 { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference</a>

---

##### `Oauth2Input`<sup>Optional</sup> <a name="Oauth2Input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2Input"></a>

```csharp
public IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 Oauth2Input { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---

##### `WorkforcePoolsInput`<sup>Optional</sup> <a name="WorkforcePoolsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePoolsInput"></a>

```csharp
public string[] WorkforcePoolsInput { get; }
```

- *Type:* string[]

---

##### `WorkforcePools`<sup>Required</sup> <a name="WorkforcePools" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePools"></a>

```csharp
public string[] WorkforcePools { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.internalValue"></a>

```csharp
public IapSettingsAccessSettingsWorkforceIdentitySettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a>

---


### IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference <a name="IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetAccessDeniedPageUri">ResetAccessDeniedPageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetGenerateTroubleshootingUri">ResetGenerateTroubleshootingUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetRemediationTokenGenerationEnabled">ResetRemediationTokenGenerationEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessDeniedPageUri` <a name="ResetAccessDeniedPageUri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetAccessDeniedPageUri"></a>

```csharp
private void ResetAccessDeniedPageUri()
```

##### `ResetGenerateTroubleshootingUri` <a name="ResetGenerateTroubleshootingUri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetGenerateTroubleshootingUri"></a>

```csharp
private void ResetGenerateTroubleshootingUri()
```

##### `ResetRemediationTokenGenerationEnabled` <a name="ResetRemediationTokenGenerationEnabled" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetRemediationTokenGenerationEnabled"></a>

```csharp
private void ResetRemediationTokenGenerationEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUriInput">AccessDeniedPageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUriInput">GenerateTroubleshootingUriInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabledInput">RemediationTokenGenerationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUri">AccessDeniedPageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUri">GenerateTroubleshootingUri</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabled">RemediationTokenGenerationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessDeniedPageUriInput`<sup>Optional</sup> <a name="AccessDeniedPageUriInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUriInput"></a>

```csharp
public string AccessDeniedPageUriInput { get; }
```

- *Type:* string

---

##### `GenerateTroubleshootingUriInput`<sup>Optional</sup> <a name="GenerateTroubleshootingUriInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUriInput"></a>

```csharp
public object GenerateTroubleshootingUriInput { get; }
```

- *Type:* object

---

##### `RemediationTokenGenerationEnabledInput`<sup>Optional</sup> <a name="RemediationTokenGenerationEnabledInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabledInput"></a>

```csharp
public object RemediationTokenGenerationEnabledInput { get; }
```

- *Type:* object

---

##### `AccessDeniedPageUri`<sup>Required</sup> <a name="AccessDeniedPageUri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUri"></a>

```csharp
public string AccessDeniedPageUri { get; }
```

- *Type:* string

---

##### `GenerateTroubleshootingUri`<sup>Required</sup> <a name="GenerateTroubleshootingUri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUri"></a>

```csharp
public object GenerateTroubleshootingUri { get; }
```

- *Type:* object

---

##### `RemediationTokenGenerationEnabled`<sup>Required</sup> <a name="RemediationTokenGenerationEnabled" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabled"></a>

```csharp
public object RemediationTokenGenerationEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.internalValue"></a>

```csharp
public IapSettingsApplicationSettingsAccessDeniedPageSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---


### IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference <a name="IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetOutputCredentials">ResetOutputCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetOutputCredentials` <a name="ResetOutputCredentials" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetOutputCredentials"></a>

```csharp
private void ResetOutputCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentialsInput">OutputCredentialsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentials">OutputCredentials</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `OutputCredentialsInput`<sup>Optional</sup> <a name="OutputCredentialsInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentialsInput"></a>

```csharp
public string[] OutputCredentialsInput { get; }
```

- *Type:* string[]

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `OutputCredentials`<sup>Required</sup> <a name="OutputCredentials" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentials"></a>

```csharp
public string[] OutputCredentials { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.internalValue"></a>

```csharp
public IapSettingsApplicationSettingsAttributePropagationSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a>

---


### IapSettingsApplicationSettingsCsmSettingsOutputReference <a name="IapSettingsApplicationSettingsCsmSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsApplicationSettingsCsmSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.resetRctokenAud">ResetRctokenAud</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRctokenAud` <a name="ResetRctokenAud" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.resetRctokenAud"></a>

```csharp
private void ResetRctokenAud()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAudInput">RctokenAudInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAud">RctokenAud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RctokenAudInput`<sup>Optional</sup> <a name="RctokenAudInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAudInput"></a>

```csharp
public string RctokenAudInput { get; }
```

- *Type:* string

---

##### `RctokenAud`<sup>Required</sup> <a name="RctokenAud" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAud"></a>

```csharp
public string RctokenAud { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.internalValue"></a>

```csharp
public IapSettingsApplicationSettingsCsmSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a>

---


### IapSettingsApplicationSettingsOutputReference <a name="IapSettingsApplicationSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsApplicationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings">PutAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings">PutAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putCsmSettings">PutCsmSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetAccessDeniedPageSettings">ResetAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetAttributePropagationSettings">ResetAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetCookieDomain">ResetCookieDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetCsmSettings">ResetCsmSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessDeniedPageSettings` <a name="PutAccessDeniedPageSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings"></a>

```csharp
private void PutAccessDeniedPageSettings(IapSettingsApplicationSettingsAccessDeniedPageSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---

##### `PutAttributePropagationSettings` <a name="PutAttributePropagationSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings"></a>

```csharp
private void PutAttributePropagationSettings(IapSettingsApplicationSettingsAttributePropagationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a>

---

##### `PutCsmSettings` <a name="PutCsmSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putCsmSettings"></a>

```csharp
private void PutCsmSettings(IapSettingsApplicationSettingsCsmSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putCsmSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a>

---

##### `ResetAccessDeniedPageSettings` <a name="ResetAccessDeniedPageSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetAccessDeniedPageSettings"></a>

```csharp
private void ResetAccessDeniedPageSettings()
```

##### `ResetAttributePropagationSettings` <a name="ResetAttributePropagationSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetAttributePropagationSettings"></a>

```csharp
private void ResetAttributePropagationSettings()
```

##### `ResetCookieDomain` <a name="ResetCookieDomain" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetCookieDomain"></a>

```csharp
private void ResetCookieDomain()
```

##### `ResetCsmSettings` <a name="ResetCsmSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetCsmSettings"></a>

```csharp
private void ResetCsmSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettings">AccessDeniedPageSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference">IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.attributePropagationSettings">AttributePropagationSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference">IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.csmSettings">CsmSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference">IapSettingsApplicationSettingsCsmSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettingsInput">AccessDeniedPageSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.attributePropagationSettingsInput">AttributePropagationSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.cookieDomainInput">CookieDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.csmSettingsInput">CsmSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.cookieDomain">CookieDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessDeniedPageSettings`<sup>Required</sup> <a name="AccessDeniedPageSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettings"></a>

```csharp
public IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference AccessDeniedPageSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference">IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference</a>

---

##### `AttributePropagationSettings`<sup>Required</sup> <a name="AttributePropagationSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.attributePropagationSettings"></a>

```csharp
public IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference AttributePropagationSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference">IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference</a>

---

##### `CsmSettings`<sup>Required</sup> <a name="CsmSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.csmSettings"></a>

```csharp
public IapSettingsApplicationSettingsCsmSettingsOutputReference CsmSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference">IapSettingsApplicationSettingsCsmSettingsOutputReference</a>

---

##### `AccessDeniedPageSettingsInput`<sup>Optional</sup> <a name="AccessDeniedPageSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettingsInput"></a>

```csharp
public IapSettingsApplicationSettingsAccessDeniedPageSettings AccessDeniedPageSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---

##### `AttributePropagationSettingsInput`<sup>Optional</sup> <a name="AttributePropagationSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.attributePropagationSettingsInput"></a>

```csharp
public IapSettingsApplicationSettingsAttributePropagationSettings AttributePropagationSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a>

---

##### `CookieDomainInput`<sup>Optional</sup> <a name="CookieDomainInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.cookieDomainInput"></a>

```csharp
public string CookieDomainInput { get; }
```

- *Type:* string

---

##### `CsmSettingsInput`<sup>Optional</sup> <a name="CsmSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.csmSettingsInput"></a>

```csharp
public IapSettingsApplicationSettingsCsmSettings CsmSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a>

---

##### `CookieDomain`<sup>Required</sup> <a name="CookieDomain" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.cookieDomain"></a>

```csharp
public string CookieDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.internalValue"></a>

```csharp
public IapSettingsApplicationSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a>

---


### IapSettingsTimeoutsOutputReference <a name="IapSettingsTimeoutsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapSettingsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



