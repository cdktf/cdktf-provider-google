# `apihubPluginInstance` Submodule <a name="`apihubPluginInstance` Submodule" id="@cdktf/provider-google.apihubPluginInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubPluginInstance <a name="ApihubPluginInstance" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance google_apihub_plugin_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstance(Construct Scope, string Id, ApihubPluginInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig">ApihubPluginInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig">ApihubPluginInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putAuthConfig">PutAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetAuthConfig">ResetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetDisable">ResetDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putActions"></a>

```csharp
private void PutActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putActions.parameter.value"></a>

- *Type:* object

---

##### `PutAuthConfig` <a name="PutAuthConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putAuthConfig"></a>

```csharp
private void PutAuthConfig(ApihubPluginInstanceAuthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig">ApihubPluginInstanceAuthConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(ApihubPluginInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts">ApihubPluginInstanceTimeouts</a>

---

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetAuthConfig` <a name="ResetAuthConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetAuthConfig"></a>

```csharp
private void ResetAuthConfig()
```

##### `ResetDisable` <a name="ResetDisable" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetDisable"></a>

```csharp
private void ResetDisable()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApihubPluginInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApihubPluginInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApihubPluginInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApihubPluginInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApihubPluginInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApihubPluginInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApihubPluginInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApihubPluginInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApihubPluginInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList">ApihubPluginInstanceActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference">ApihubPluginInstanceAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference">ApihubPluginInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.actionsInput">ActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.authConfigInput">AuthConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig">ApihubPluginInstanceAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.disableInput">DisableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.pluginInput">PluginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.pluginInstanceIdInput">PluginInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.disable">Disable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.plugin">Plugin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.pluginInstanceId">PluginInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.actions"></a>

```csharp
public ApihubPluginInstanceActionsList Actions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList">ApihubPluginInstanceActionsList</a>

---

##### `AuthConfig`<sup>Required</sup> <a name="AuthConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.authConfig"></a>

```csharp
public ApihubPluginInstanceAuthConfigOutputReference AuthConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference">ApihubPluginInstanceAuthConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.timeouts"></a>

```csharp
public ApihubPluginInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference">ApihubPluginInstanceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.actionsInput"></a>

```csharp
public object ActionsInput { get; }
```

- *Type:* object

---

##### `AuthConfigInput`<sup>Optional</sup> <a name="AuthConfigInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.authConfigInput"></a>

```csharp
public ApihubPluginInstanceAuthConfig AuthConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig">ApihubPluginInstanceAuthConfig</a>

---

##### `DisableInput`<sup>Optional</sup> <a name="DisableInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.disableInput"></a>

```csharp
public object DisableInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PluginInput`<sup>Optional</sup> <a name="PluginInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.pluginInput"></a>

```csharp
public string PluginInput { get; }
```

- *Type:* string

---

##### `PluginInstanceIdInput`<sup>Optional</sup> <a name="PluginInstanceIdInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.pluginInstanceIdInput"></a>

```csharp
public string PluginInstanceIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.disable"></a>

```csharp
public object Disable { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Plugin`<sup>Required</sup> <a name="Plugin" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.plugin"></a>

```csharp
public string Plugin { get; }
```

- *Type:* string

---

##### `PluginInstanceId`<sup>Required</sup> <a name="PluginInstanceId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.pluginInstanceId"></a>

```csharp
public string PluginInstanceId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubPluginInstanceActions <a name="ApihubPluginInstanceActions" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceActions {
    string ActionId,
    ApihubPluginInstanceActionsCurationConfig CurationConfig = null,
    string ScheduleCronExpression = null,
    string ScheduleTimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.property.actionId">ActionId</a></code> | <code>string</code> | This should map to one of the action id specified in actions_config in the plugin. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.property.curationConfig">CurationConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig">ApihubPluginInstanceActionsCurationConfig</a></code> | curation_config block. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.property.scheduleCronExpression">ScheduleCronExpression</a></code> | <code>string</code> | The schedule for this plugin instance action. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.property.scheduleTimeZone">ScheduleTimeZone</a></code> | <code>string</code> | The time zone for the schedule cron expression. If not provided, UTC will be used. |

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.property.actionId"></a>

```csharp
public string ActionId { get; set; }
```

- *Type:* string

This should map to one of the action id specified in actions_config in the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#action_id ApihubPluginInstance#action_id}

---

##### `CurationConfig`<sup>Optional</sup> <a name="CurationConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.property.curationConfig"></a>

```csharp
public ApihubPluginInstanceActionsCurationConfig CurationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig">ApihubPluginInstanceActionsCurationConfig</a>

curation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#curation_config ApihubPluginInstance#curation_config}

---

##### `ScheduleCronExpression`<sup>Optional</sup> <a name="ScheduleCronExpression" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.property.scheduleCronExpression"></a>

```csharp
public string ScheduleCronExpression { get; set; }
```

- *Type:* string

The schedule for this plugin instance action.

This can only be set if the
plugin supports API_HUB_SCHEDULE_TRIGGER mode for this action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#schedule_cron_expression ApihubPluginInstance#schedule_cron_expression}

---

##### `ScheduleTimeZone`<sup>Optional</sup> <a name="ScheduleTimeZone" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActions.property.scheduleTimeZone"></a>

```csharp
public string ScheduleTimeZone { get; set; }
```

- *Type:* string

The time zone for the schedule cron expression. If not provided, UTC will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#schedule_time_zone ApihubPluginInstance#schedule_time_zone}

---

### ApihubPluginInstanceActionsCurationConfig <a name="ApihubPluginInstanceActionsCurationConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceActionsCurationConfig {
    string CurationType = null,
    ApihubPluginInstanceActionsCurationConfigCustomCuration CustomCuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig.property.curationType">CurationType</a></code> | <code>string</code> | Possible values: CURATION_TYPE_UNSPECIFIED DEFAULT_CURATION_FOR_API_METADATA CUSTOM_CURATION_FOR_API_METADATA. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig.property.customCuration">CustomCuration</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration">ApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | custom_curation block. |

---

##### `CurationType`<sup>Optional</sup> <a name="CurationType" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig.property.curationType"></a>

```csharp
public string CurationType { get; set; }
```

- *Type:* string

Possible values: CURATION_TYPE_UNSPECIFIED DEFAULT_CURATION_FOR_API_METADATA CUSTOM_CURATION_FOR_API_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#curation_type ApihubPluginInstance#curation_type}

---

##### `CustomCuration`<sup>Optional</sup> <a name="CustomCuration" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig.property.customCuration"></a>

```csharp
public ApihubPluginInstanceActionsCurationConfigCustomCuration CustomCuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration">ApihubPluginInstanceActionsCurationConfigCustomCuration</a>

custom_curation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#custom_curation ApihubPluginInstance#custom_curation}

---

### ApihubPluginInstanceActionsCurationConfigCustomCuration <a name="ApihubPluginInstanceActionsCurationConfigCustomCuration" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceActionsCurationConfigCustomCuration {
    string Curation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration.property.curation">Curation</a></code> | <code>string</code> | The unique name of the curation resource. This will be the name of the curation resource in the format: 'projects/{project}/locations/{location}/curations/{curation}'. |

---

##### `Curation`<sup>Required</sup> <a name="Curation" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration.property.curation"></a>

```csharp
public string Curation { get; set; }
```

- *Type:* string

The unique name of the curation resource. This will be the name of the curation resource in the format: 'projects/{project}/locations/{location}/curations/{curation}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#curation ApihubPluginInstance#curation}

---

### ApihubPluginInstanceActionsHubInstanceAction <a name="ApihubPluginInstanceActionsHubInstanceAction" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceActionsHubInstanceAction {

};
```


### ApihubPluginInstanceActionsHubInstanceActionLastExecution <a name="ApihubPluginInstanceActionsHubInstanceActionLastExecution" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecution.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceActionsHubInstanceActionLastExecution {

};
```


### ApihubPluginInstanceAuthConfig <a name="ApihubPluginInstanceAuthConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceAuthConfig {
    string AuthType,
    ApihubPluginInstanceAuthConfigApiKeyConfig ApiKeyConfig = null,
    ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig GoogleServiceAccountConfig = null,
    ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig Oauth2ClientCredentialsConfig = null,
    ApihubPluginInstanceAuthConfigUserPasswordConfig UserPasswordConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.authType">AuthType</a></code> | <code>string</code> | Possible values: AUTH_TYPE_UNSPECIFIED NO_AUTH GOOGLE_SERVICE_ACCOUNT USER_PASSWORD API_KEY OAUTH2_CLIENT_CREDENTIALS. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig">ApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.googleServiceAccountConfig">GoogleServiceAccountConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | google_service_account_config block. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.oauth2ClientCredentialsConfig">Oauth2ClientCredentialsConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | oauth2_client_credentials_config block. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.userPasswordConfig">UserPasswordConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig">ApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | user_password_config block. |

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Possible values: AUTH_TYPE_UNSPECIFIED NO_AUTH GOOGLE_SERVICE_ACCOUNT USER_PASSWORD API_KEY OAUTH2_CLIENT_CREDENTIALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#auth_type ApihubPluginInstance#auth_type}

---

##### `ApiKeyConfig`<sup>Optional</sup> <a name="ApiKeyConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.apiKeyConfig"></a>

```csharp
public ApihubPluginInstanceAuthConfigApiKeyConfig ApiKeyConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig">ApihubPluginInstanceAuthConfigApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#api_key_config ApihubPluginInstance#api_key_config}

---

##### `GoogleServiceAccountConfig`<sup>Optional</sup> <a name="GoogleServiceAccountConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.googleServiceAccountConfig"></a>

```csharp
public ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig GoogleServiceAccountConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

google_service_account_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#google_service_account_config ApihubPluginInstance#google_service_account_config}

---

##### `Oauth2ClientCredentialsConfig`<sup>Optional</sup> <a name="Oauth2ClientCredentialsConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.oauth2ClientCredentialsConfig"></a>

```csharp
public ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig Oauth2ClientCredentialsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

oauth2_client_credentials_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#oauth2_client_credentials_config ApihubPluginInstance#oauth2_client_credentials_config}

---

##### `UserPasswordConfig`<sup>Optional</sup> <a name="UserPasswordConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig.property.userPasswordConfig"></a>

```csharp
public ApihubPluginInstanceAuthConfigUserPasswordConfig UserPasswordConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig">ApihubPluginInstanceAuthConfigUserPasswordConfig</a>

user_password_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#user_password_config ApihubPluginInstance#user_password_config}

---

### ApihubPluginInstanceAuthConfigApiKeyConfig <a name="ApihubPluginInstanceAuthConfigApiKeyConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceAuthConfigApiKeyConfig {
    ApihubPluginInstanceAuthConfigApiKeyConfigApiKey ApiKey,
    string HttpElementLocation,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey">ApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | api_key block. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig.property.httpElementLocation">HttpElementLocation</a></code> | <code>string</code> | The location of the API key. The default value is QUERY. Possible values: HTTP_ELEMENT_LOCATION_UNSPECIFIED QUERY HEADER PATH BODY COOKIE. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig.property.name">Name</a></code> | <code>string</code> | The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name. |

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig.property.apiKey"></a>

```csharp
public ApihubPluginInstanceAuthConfigApiKeyConfigApiKey ApiKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey">ApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#api_key ApihubPluginInstance#api_key}

---

##### `HttpElementLocation`<sup>Required</sup> <a name="HttpElementLocation" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig.property.httpElementLocation"></a>

```csharp
public string HttpElementLocation { get; set; }
```

- *Type:* string

The location of the API key. The default value is QUERY. Possible values: HTTP_ELEMENT_LOCATION_UNSPECIFIED QUERY HEADER PATH BODY COOKIE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#http_element_location ApihubPluginInstance#http_element_location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The parameter name of the API key. E.g. If the API request is "https://example.com/act?api_key=", "api_key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#name ApihubPluginInstance#name}

---

### ApihubPluginInstanceAuthConfigApiKeyConfigApiKey <a name="ApihubPluginInstanceAuthConfigApiKeyConfigApiKey" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceAuthConfigApiKeyConfigApiKey {
    string SecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey.property.secretVersion">SecretVersion</a></code> | <code>string</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#secret_version ApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig <a name="ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig {
    string ServiceAccount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The service account to be used for authenticating request. |

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The service account to be used for authenticating request.

The 'iam.serviceAccounts.getAccessToken' permission should be granted on
this service account to the impersonator service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#service_account ApihubPluginInstance#service_account}

---

### ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig <a name="ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig {
    string ClientId,
    ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret ClientSecret
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client identifier. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | client_secret block. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#client_id ApihubPluginInstance#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig.property.clientSecret"></a>

```csharp
public ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret ClientSecret { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#client_secret ApihubPluginInstance#client_secret}

---

### ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret <a name="ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret {
    string SecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.property.secretVersion">SecretVersion</a></code> | <code>string</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#secret_version ApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### ApihubPluginInstanceAuthConfigUserPasswordConfig <a name="ApihubPluginInstanceAuthConfigUserPasswordConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceAuthConfigUserPasswordConfig {
    ApihubPluginInstanceAuthConfigUserPasswordConfigPassword Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig.property.password">Password</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword">ApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | password block. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig.property.username">Username</a></code> | <code>string</code> | Username. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig.property.password"></a>

```csharp
public ApihubPluginInstanceAuthConfigUserPasswordConfigPassword Password { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword">ApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#password ApihubPluginInstance#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#username ApihubPluginInstance#username}

---

### ApihubPluginInstanceAuthConfigUserPasswordConfigPassword <a name="ApihubPluginInstanceAuthConfigUserPasswordConfigPassword" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceAuthConfigUserPasswordConfigPassword {
    string SecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword.property.secretVersion">SecretVersion</a></code> | <code>string</code> | The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'. |

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

The resource name of the secret version in the format, format as: 'projects/* /secrets/* /versions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#secret_version ApihubPluginInstance#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### ApihubPluginInstanceConfig <a name="ApihubPluginInstanceConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Location,
    string Plugin,
    string PluginInstanceId,
    object Actions = null,
    ApihubPluginInstanceAuthConfig AuthConfig = null,
    object Disable = null,
    string Id = null,
    string Project = null,
    ApihubPluginInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for this plugin instance. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.plugin">Plugin</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.pluginInstanceId">PluginInstanceId</a></code> | <code>string</code> | The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.actions">Actions</a></code> | <code>object</code> | actions block. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig">ApihubPluginInstanceAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.disable">Disable</a></code> | <code>object</code> | The display name for this plugin instance. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#id ApihubPluginInstance#id}. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#project ApihubPluginInstance#project}. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts">ApihubPluginInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for this plugin instance. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#display_name ApihubPluginInstance#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#location ApihubPluginInstance#location}

---

##### `Plugin`<sup>Required</sup> <a name="Plugin" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.plugin"></a>

```csharp
public string Plugin { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#plugin ApihubPluginInstance#plugin}

---

##### `PluginInstanceId`<sup>Required</sup> <a name="PluginInstanceId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.pluginInstanceId"></a>

```csharp
public string PluginInstanceId { get; set; }
```

- *Type:* string

The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified id is already used by another plugin instance in the plugin
  resource.
* If not provided, a system generated id will be used.

This value should be 4-63 characters, and valid characters
are /a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#plugin_instance_id ApihubPluginInstance#plugin_instance_id}

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.actions"></a>

```csharp
public object Actions { get; set; }
```

- *Type:* object

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#actions ApihubPluginInstance#actions}

---

##### `AuthConfig`<sup>Optional</sup> <a name="AuthConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.authConfig"></a>

```csharp
public ApihubPluginInstanceAuthConfig AuthConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig">ApihubPluginInstanceAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#auth_config ApihubPluginInstance#auth_config}

---

##### `Disable`<sup>Optional</sup> <a name="Disable" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.disable"></a>

```csharp
public object Disable { get; set; }
```

- *Type:* object

The display name for this plugin instance. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#disable ApihubPluginInstance#disable}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#id ApihubPluginInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#project ApihubPluginInstance#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceConfig.property.timeouts"></a>

```csharp
public ApihubPluginInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts">ApihubPluginInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#timeouts ApihubPluginInstance#timeouts}

---

### ApihubPluginInstanceTimeouts <a name="ApihubPluginInstanceTimeouts" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#create ApihubPluginInstance#create}. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#delete ApihubPluginInstance#delete}. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#update ApihubPluginInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#create ApihubPluginInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#delete ApihubPluginInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_plugin_instance#update ApihubPluginInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference <a name="ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curationInput">CurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curation">Curation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration">ApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurationInput`<sup>Optional</sup> <a name="CurationInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curationInput"></a>

```csharp
public string CurationInput { get; }
```

- *Type:* string

---

##### `Curation`<sup>Required</sup> <a name="Curation" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.curation"></a>

```csharp
public string Curation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference.property.internalValue"></a>

```csharp
public ApihubPluginInstanceActionsCurationConfigCustomCuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration">ApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---


### ApihubPluginInstanceActionsCurationConfigOutputReference <a name="ApihubPluginInstanceActionsCurationConfigOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceActionsCurationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration">PutCustomCuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.resetCurationType">ResetCurationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.resetCustomCuration">ResetCustomCuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomCuration` <a name="PutCustomCuration" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration"></a>

```csharp
private void PutCustomCuration(ApihubPluginInstanceActionsCurationConfigCustomCuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.putCustomCuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration">ApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---

##### `ResetCurationType` <a name="ResetCurationType" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.resetCurationType"></a>

```csharp
private void ResetCurationType()
```

##### `ResetCustomCuration` <a name="ResetCustomCuration" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.resetCustomCuration"></a>

```csharp
private void ResetCustomCuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.customCuration">CustomCuration</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference">ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.curationTypeInput">CurationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.customCurationInput">CustomCurationInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration">ApihubPluginInstanceActionsCurationConfigCustomCuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.curationType">CurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig">ApihubPluginInstanceActionsCurationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomCuration`<sup>Required</sup> <a name="CustomCuration" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.customCuration"></a>

```csharp
public ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference CustomCuration { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference">ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference</a>

---

##### `CurationTypeInput`<sup>Optional</sup> <a name="CurationTypeInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.curationTypeInput"></a>

```csharp
public string CurationTypeInput { get; }
```

- *Type:* string

---

##### `CustomCurationInput`<sup>Optional</sup> <a name="CustomCurationInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.customCurationInput"></a>

```csharp
public ApihubPluginInstanceActionsCurationConfigCustomCuration CustomCurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigCustomCuration">ApihubPluginInstanceActionsCurationConfigCustomCuration</a>

---

##### `CurationType`<sup>Required</sup> <a name="CurationType" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.curationType"></a>

```csharp
public string CurationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference.property.internalValue"></a>

```csharp
public ApihubPluginInstanceActionsCurationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig">ApihubPluginInstanceActionsCurationConfig</a>

---


### ApihubPluginInstanceActionsHubInstanceActionLastExecutionList <a name="ApihubPluginInstanceActionsHubInstanceActionLastExecutionList" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceActionsHubInstanceActionLastExecutionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get"></a>

```csharp
private ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference <a name="ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.result">Result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecution">ApihubPluginInstanceActionsHubInstanceActionLastExecution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.result"></a>

```csharp
public string Result { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference.property.internalValue"></a>

```csharp
public ApihubPluginInstanceActionsHubInstanceActionLastExecution InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecution">ApihubPluginInstanceActionsHubInstanceActionLastExecution</a>

---


### ApihubPluginInstanceActionsHubInstanceActionList <a name="ApihubPluginInstanceActionsHubInstanceActionList" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceActionsHubInstanceActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.get"></a>

```csharp
private ApihubPluginInstanceActionsHubInstanceActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApihubPluginInstanceActionsHubInstanceActionOutputReference <a name="ApihubPluginInstanceActionsHubInstanceActionOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceActionsHubInstanceActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.currentExecutionState">CurrentExecutionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.lastExecution">LastExecution</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList">ApihubPluginInstanceActionsHubInstanceActionLastExecutionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceAction">ApihubPluginInstanceActionsHubInstanceAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentExecutionState`<sup>Required</sup> <a name="CurrentExecutionState" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.currentExecutionState"></a>

```csharp
public string CurrentExecutionState { get; }
```

- *Type:* string

---

##### `LastExecution`<sup>Required</sup> <a name="LastExecution" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.lastExecution"></a>

```csharp
public ApihubPluginInstanceActionsHubInstanceActionLastExecutionList LastExecution { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionLastExecutionList">ApihubPluginInstanceActionsHubInstanceActionLastExecutionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionOutputReference.property.internalValue"></a>

```csharp
public ApihubPluginInstanceActionsHubInstanceAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceAction">ApihubPluginInstanceActionsHubInstanceAction</a>

---


### ApihubPluginInstanceActionsList <a name="ApihubPluginInstanceActionsList" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.get"></a>

```csharp
private ApihubPluginInstanceActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApihubPluginInstanceActionsOutputReference <a name="ApihubPluginInstanceActionsOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.putCurationConfig">PutCurationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resetCurationConfig">ResetCurationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resetScheduleCronExpression">ResetScheduleCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resetScheduleTimeZone">ResetScheduleTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCurationConfig` <a name="PutCurationConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.putCurationConfig"></a>

```csharp
private void PutCurationConfig(ApihubPluginInstanceActionsCurationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.putCurationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig">ApihubPluginInstanceActionsCurationConfig</a>

---

##### `ResetCurationConfig` <a name="ResetCurationConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resetCurationConfig"></a>

```csharp
private void ResetCurationConfig()
```

##### `ResetScheduleCronExpression` <a name="ResetScheduleCronExpression" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resetScheduleCronExpression"></a>

```csharp
private void ResetScheduleCronExpression()
```

##### `ResetScheduleTimeZone` <a name="ResetScheduleTimeZone" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.resetScheduleTimeZone"></a>

```csharp
private void ResetScheduleTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.curationConfig">CurationConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference">ApihubPluginInstanceActionsCurationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.hubInstanceAction">HubInstanceAction</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList">ApihubPluginInstanceActionsHubInstanceActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.actionIdInput">ActionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.curationConfigInput">CurationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig">ApihubPluginInstanceActionsCurationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.scheduleCronExpressionInput">ScheduleCronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.scheduleTimeZoneInput">ScheduleTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.actionId">ActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.scheduleCronExpression">ScheduleCronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.scheduleTimeZone">ScheduleTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurationConfig`<sup>Required</sup> <a name="CurationConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.curationConfig"></a>

```csharp
public ApihubPluginInstanceActionsCurationConfigOutputReference CurationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfigOutputReference">ApihubPluginInstanceActionsCurationConfigOutputReference</a>

---

##### `HubInstanceAction`<sup>Required</sup> <a name="HubInstanceAction" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.hubInstanceAction"></a>

```csharp
public ApihubPluginInstanceActionsHubInstanceActionList HubInstanceAction { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsHubInstanceActionList">ApihubPluginInstanceActionsHubInstanceActionList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ActionIdInput`<sup>Optional</sup> <a name="ActionIdInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.actionIdInput"></a>

```csharp
public string ActionIdInput { get; }
```

- *Type:* string

---

##### `CurationConfigInput`<sup>Optional</sup> <a name="CurationConfigInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.curationConfigInput"></a>

```csharp
public ApihubPluginInstanceActionsCurationConfig CurationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsCurationConfig">ApihubPluginInstanceActionsCurationConfig</a>

---

##### `ScheduleCronExpressionInput`<sup>Optional</sup> <a name="ScheduleCronExpressionInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.scheduleCronExpressionInput"></a>

```csharp
public string ScheduleCronExpressionInput { get; }
```

- *Type:* string

---

##### `ScheduleTimeZoneInput`<sup>Optional</sup> <a name="ScheduleTimeZoneInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.scheduleTimeZoneInput"></a>

```csharp
public string ScheduleTimeZoneInput { get; }
```

- *Type:* string

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.actionId"></a>

```csharp
public string ActionId { get; }
```

- *Type:* string

---

##### `ScheduleCronExpression`<sup>Required</sup> <a name="ScheduleCronExpression" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.scheduleCronExpression"></a>

```csharp
public string ScheduleCronExpression { get; }
```

- *Type:* string

---

##### `ScheduleTimeZone`<sup>Required</sup> <a name="ScheduleTimeZone" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.scheduleTimeZone"></a>

```csharp
public string ScheduleTimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference <a name="ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey">ApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference.property.internalValue"></a>

```csharp
public ApihubPluginInstanceAuthConfigApiKeyConfigApiKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey">ApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---


### ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference <a name="ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey"></a>

```csharp
private void PutApiKey(ApihubPluginInstanceAuthConfigApiKeyConfigApiKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey">ApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference">ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey">ApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocationInput">HttpElementLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocation">HttpElementLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig">ApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKey"></a>

```csharp
public ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference">ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.apiKeyInput"></a>

```csharp
public ApihubPluginInstanceAuthConfigApiKeyConfigApiKey ApiKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigApiKey">ApihubPluginInstanceAuthConfigApiKeyConfigApiKey</a>

---

##### `HttpElementLocationInput`<sup>Optional</sup> <a name="HttpElementLocationInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocationInput"></a>

```csharp
public string HttpElementLocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `HttpElementLocation`<sup>Required</sup> <a name="HttpElementLocation" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.httpElementLocation"></a>

```csharp
public string HttpElementLocation { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference.property.internalValue"></a>

```csharp
public ApihubPluginInstanceAuthConfigApiKeyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig">ApihubPluginInstanceAuthConfigApiKeyConfig</a>

---


### ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference <a name="ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference.property.internalValue"></a>

```csharp
public ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---


### ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference <a name="ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference.property.internalValue"></a>

```csharp
public ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---


### ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference <a name="ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret">PutClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientSecret` <a name="PutClientSecret" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret"></a>

```csharp
private void PutClientSecret(ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecret"></a>

```csharp
public ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference ClientSecret { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientSecretInput"></a>

```csharp
public ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret ClientSecretInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret</a>

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference.property.internalValue"></a>

```csharp
public ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---


### ApihubPluginInstanceAuthConfigOutputReference <a name="ApihubPluginInstanceAuthConfigOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig">PutApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig">PutGoogleServiceAccountConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig">PutOauth2ClientCredentialsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig">PutUserPasswordConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resetApiKeyConfig">ResetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resetGoogleServiceAccountConfig">ResetGoogleServiceAccountConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resetOauth2ClientCredentialsConfig">ResetOauth2ClientCredentialsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resetUserPasswordConfig">ResetUserPasswordConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyConfig` <a name="PutApiKeyConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig"></a>

```csharp
private void PutApiKeyConfig(ApihubPluginInstanceAuthConfigApiKeyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig">ApihubPluginInstanceAuthConfigApiKeyConfig</a>

---

##### `PutGoogleServiceAccountConfig` <a name="PutGoogleServiceAccountConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig"></a>

```csharp
private void PutGoogleServiceAccountConfig(ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putGoogleServiceAccountConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---

##### `PutOauth2ClientCredentialsConfig` <a name="PutOauth2ClientCredentialsConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig"></a>

```csharp
private void PutOauth2ClientCredentialsConfig(ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putOauth2ClientCredentialsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---

##### `PutUserPasswordConfig` <a name="PutUserPasswordConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig"></a>

```csharp
private void PutUserPasswordConfig(ApihubPluginInstanceAuthConfigUserPasswordConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.putUserPasswordConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig">ApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---

##### `ResetApiKeyConfig` <a name="ResetApiKeyConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resetApiKeyConfig"></a>

```csharp
private void ResetApiKeyConfig()
```

##### `ResetGoogleServiceAccountConfig` <a name="ResetGoogleServiceAccountConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resetGoogleServiceAccountConfig"></a>

```csharp
private void ResetGoogleServiceAccountConfig()
```

##### `ResetOauth2ClientCredentialsConfig` <a name="ResetOauth2ClientCredentialsConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resetOauth2ClientCredentialsConfig"></a>

```csharp
private void ResetOauth2ClientCredentialsConfig()
```

##### `ResetUserPasswordConfig` <a name="ResetUserPasswordConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.resetUserPasswordConfig"></a>

```csharp
private void ResetUserPasswordConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference">ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfig">GoogleServiceAccountConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfig">Oauth2ClientCredentialsConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfig">UserPasswordConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference">ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfigInput">ApiKeyConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig">ApihubPluginInstanceAuthConfigApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfigInput">GoogleServiceAccountConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfigInput">Oauth2ClientCredentialsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfigInput">UserPasswordConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig">ApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig">ApihubPluginInstanceAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyConfig`<sup>Required</sup> <a name="ApiKeyConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfig"></a>

```csharp
public ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference ApiKeyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference">ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference</a>

---

##### `GoogleServiceAccountConfig`<sup>Required</sup> <a name="GoogleServiceAccountConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfig"></a>

```csharp
public ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference GoogleServiceAccountConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference</a>

---

##### `Oauth2ClientCredentialsConfig`<sup>Required</sup> <a name="Oauth2ClientCredentialsConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfig"></a>

```csharp
public ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference Oauth2ClientCredentialsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference</a>

---

##### `UserPasswordConfig`<sup>Required</sup> <a name="UserPasswordConfig" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfig"></a>

```csharp
public ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference UserPasswordConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference">ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference</a>

---

##### `ApiKeyConfigInput`<sup>Optional</sup> <a name="ApiKeyConfigInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.apiKeyConfigInput"></a>

```csharp
public ApihubPluginInstanceAuthConfigApiKeyConfig ApiKeyConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigApiKeyConfig">ApihubPluginInstanceAuthConfigApiKeyConfig</a>

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `GoogleServiceAccountConfigInput`<sup>Optional</sup> <a name="GoogleServiceAccountConfigInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.googleServiceAccountConfigInput"></a>

```csharp
public ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig GoogleServiceAccountConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig">ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig</a>

---

##### `Oauth2ClientCredentialsConfigInput`<sup>Optional</sup> <a name="Oauth2ClientCredentialsConfigInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.oauth2ClientCredentialsConfigInput"></a>

```csharp
public ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig Oauth2ClientCredentialsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig">ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig</a>

---

##### `UserPasswordConfigInput`<sup>Optional</sup> <a name="UserPasswordConfigInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.userPasswordConfigInput"></a>

```csharp
public ApihubPluginInstanceAuthConfigUserPasswordConfig UserPasswordConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig">ApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigOutputReference.property.internalValue"></a>

```csharp
public ApihubPluginInstanceAuthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfig">ApihubPluginInstanceAuthConfig</a>

---


### ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference <a name="ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword">PutPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPassword` <a name="PutPassword" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword"></a>

```csharp
private void PutPassword(ApihubPluginInstanceAuthConfigUserPasswordConfigPassword Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.putPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword">ApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.password">Password</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference">ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.passwordInput">PasswordInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword">ApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig">ApihubPluginInstanceAuthConfigUserPasswordConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.password"></a>

```csharp
public ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference Password { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference">ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.passwordInput"></a>

```csharp
public ApihubPluginInstanceAuthConfigUserPasswordConfigPassword PasswordInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword">ApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference.property.internalValue"></a>

```csharp
public ApihubPluginInstanceAuthConfigUserPasswordConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfig">ApihubPluginInstanceAuthConfigUserPasswordConfig</a>

---


### ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference <a name="ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword">ApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference.property.internalValue"></a>

```csharp
public ApihubPluginInstanceAuthConfigUserPasswordConfigPassword InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceAuthConfigUserPasswordConfigPassword">ApihubPluginInstanceAuthConfigUserPasswordConfigPassword</a>

---


### ApihubPluginInstanceTimeoutsOutputReference <a name="ApihubPluginInstanceTimeoutsOutputReference" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApihubPluginInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPluginInstance.ApihubPluginInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



