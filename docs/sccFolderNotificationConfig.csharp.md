# `sccFolderNotificationConfig` Submodule <a name="`sccFolderNotificationConfig` Submodule" id="@cdktf/provider-google.sccFolderNotificationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccFolderNotificationConfig <a name="SccFolderNotificationConfig" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config google_scc_folder_notification_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderNotificationConfig(Construct Scope, string Id, SccFolderNotificationConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig">SccFolderNotificationConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig">SccFolderNotificationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.putStreamingConfig">PutStreamingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStreamingConfig` <a name="PutStreamingConfig" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.putStreamingConfig"></a>

```csharp
private void PutStreamingConfig(SccFolderNotificationConfigStreamingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.putStreamingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfig">SccFolderNotificationConfigStreamingConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(SccFolderNotificationConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeouts">SccFolderNotificationConfigTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SccFolderNotificationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccFolderNotificationConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccFolderNotificationConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccFolderNotificationConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccFolderNotificationConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SccFolderNotificationConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccFolderNotificationConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccFolderNotificationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SccFolderNotificationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.streamingConfig">StreamingConfig</a></code> | <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference">SccFolderNotificationConfigStreamingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference">SccFolderNotificationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.configIdInput">ConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.streamingConfigInput">StreamingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfig">SccFolderNotificationConfigStreamingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.configId">ConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `StreamingConfig`<sup>Required</sup> <a name="StreamingConfig" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.streamingConfig"></a>

```csharp
public SccFolderNotificationConfigStreamingConfigOutputReference StreamingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference">SccFolderNotificationConfigStreamingConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.timeouts"></a>

```csharp
public SccFolderNotificationConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference">SccFolderNotificationConfigTimeoutsOutputReference</a>

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.configIdInput"></a>

```csharp
public string ConfigIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.pubsubTopicInput"></a>

```csharp
public string PubsubTopicInput { get; }
```

- *Type:* string

---

##### `StreamingConfigInput`<sup>Optional</sup> <a name="StreamingConfigInput" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.streamingConfigInput"></a>

```csharp
public SccFolderNotificationConfigStreamingConfig StreamingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfig">SccFolderNotificationConfigStreamingConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.configId"></a>

```csharp
public string ConfigId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccFolderNotificationConfigConfig <a name="SccFolderNotificationConfigConfig" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderNotificationConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConfigId,
    string Folder,
    string PubsubTopic,
    SccFolderNotificationConfigStreamingConfig StreamingConfig,
    string Description = null,
    string Id = null,
    SccFolderNotificationConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.configId">ConfigId</a></code> | <code>string</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.folder">Folder</a></code> | <code>string</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]". |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.streamingConfig">StreamingConfig</a></code> | <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfig">SccFolderNotificationConfigStreamingConfig</a></code> | streaming_config block. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.description">Description</a></code> | <code>string</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config#id SccFolderNotificationConfig#id}. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeouts">SccFolderNotificationConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.configId"></a>

```csharp
public string ConfigId { get; set; }
```

- *Type:* string

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config#config_id SccFolderNotificationConfig#config_id}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config#folder SccFolderNotificationConfig#folder}

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; set; }
```

- *Type:* string

The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config#pubsub_topic SccFolderNotificationConfig#pubsub_topic}

---

##### `StreamingConfig`<sup>Required</sup> <a name="StreamingConfig" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.streamingConfig"></a>

```csharp
public SccFolderNotificationConfigStreamingConfig StreamingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfig">SccFolderNotificationConfigStreamingConfig</a>

streaming_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config#streaming_config SccFolderNotificationConfig#streaming_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config#description SccFolderNotificationConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config#id SccFolderNotificationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigConfig.property.timeouts"></a>

```csharp
public SccFolderNotificationConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeouts">SccFolderNotificationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config#timeouts SccFolderNotificationConfig#timeouts}

---

### SccFolderNotificationConfigStreamingConfig <a name="SccFolderNotificationConfigStreamingConfig" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderNotificationConfigStreamingConfig {
    string Filter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfig.property.filter">Filter</a></code> | <code>string</code> | Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* > , <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config#filter SccFolderNotificationConfig#filter}

---

### SccFolderNotificationConfigTimeouts <a name="SccFolderNotificationConfigTimeouts" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderNotificationConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config#create SccFolderNotificationConfig#create}. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config#delete SccFolderNotificationConfig#delete}. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config#update SccFolderNotificationConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config#create SccFolderNotificationConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config#delete SccFolderNotificationConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_folder_notification_config#update SccFolderNotificationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccFolderNotificationConfigStreamingConfigOutputReference <a name="SccFolderNotificationConfigStreamingConfigOutputReference" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderNotificationConfigStreamingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfig">SccFolderNotificationConfigStreamingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfigOutputReference.property.internalValue"></a>

```csharp
public SccFolderNotificationConfigStreamingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigStreamingConfig">SccFolderNotificationConfigStreamingConfig</a>

---


### SccFolderNotificationConfigTimeoutsOutputReference <a name="SccFolderNotificationConfigTimeoutsOutputReference" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderNotificationConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccFolderNotificationConfig.SccFolderNotificationConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



