# `sccFolderCustomModule` Submodule <a name="`sccFolderCustomModule` Submodule" id="@cdktf/provider-google.sccFolderCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccFolderCustomModule <a name="SccFolderCustomModule" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module google_scc_folder_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModule(Construct Scope, string Id, SccFolderCustomModuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig">SccFolderCustomModuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig">SccFolderCustomModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putCustomConfig">PutCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomConfig` <a name="PutCustomConfig" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putCustomConfig"></a>

```csharp
private void PutCustomConfig(SccFolderCustomModuleCustomConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig">SccFolderCustomModuleCustomConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putTimeouts"></a>

```csharp
private void PutTimeouts(SccFolderCustomModuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts">SccFolderCustomModuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SccFolderCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccFolderCustomModule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccFolderCustomModule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccFolderCustomModule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccFolderCustomModule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SccFolderCustomModule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccFolderCustomModule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccFolderCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SccFolderCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.ancestorModule">AncestorModule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.customConfig">CustomConfig</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference">SccFolderCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.lastEditor">LastEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference">SccFolderCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.customConfigInput">CustomConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig">SccFolderCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.enablementStateInput">EnablementStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.enablementState">EnablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AncestorModule`<sup>Required</sup> <a name="AncestorModule" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.ancestorModule"></a>

```csharp
public string AncestorModule { get; }
```

- *Type:* string

---

##### `CustomConfig`<sup>Required</sup> <a name="CustomConfig" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.customConfig"></a>

```csharp
public SccFolderCustomModuleCustomConfigOutputReference CustomConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference">SccFolderCustomModuleCustomConfigOutputReference</a>

---

##### `LastEditor`<sup>Required</sup> <a name="LastEditor" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.lastEditor"></a>

```csharp
public string LastEditor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.timeouts"></a>

```csharp
public SccFolderCustomModuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference">SccFolderCustomModuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CustomConfigInput`<sup>Optional</sup> <a name="CustomConfigInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.customConfigInput"></a>

```csharp
public SccFolderCustomModuleCustomConfig CustomConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig">SccFolderCustomModuleCustomConfig</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnablementStateInput`<sup>Optional</sup> <a name="EnablementStateInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.enablementStateInput"></a>

```csharp
public string EnablementStateInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnablementState`<sup>Required</sup> <a name="EnablementState" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.enablementState"></a>

```csharp
public string EnablementState { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccFolderCustomModuleConfig <a name="SccFolderCustomModuleConfig" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    SccFolderCustomModuleCustomConfig CustomConfig,
    string DisplayName,
    string EnablementState,
    string Folder,
    string Id = null,
    SccFolderCustomModuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.customConfig">CustomConfig</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig">SccFolderCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.enablementState">EnablementState</a></code> | <code>string</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.folder">Folder</a></code> | <code>string</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#id SccFolderCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts">SccFolderCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CustomConfig`<sup>Required</sup> <a name="CustomConfig" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.customConfig"></a>

```csharp
public SccFolderCustomModuleCustomConfig CustomConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig">SccFolderCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#custom_config SccFolderCustomModule#custom_config}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#display_name SccFolderCustomModule#display_name}

---

##### `EnablementState`<sup>Required</sup> <a name="EnablementState" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.enablementState"></a>

```csharp
public string EnablementState { get; set; }
```

- *Type:* string

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#enablement_state SccFolderCustomModule#enablement_state}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#folder SccFolderCustomModule#folder}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#id SccFolderCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleConfig.property.timeouts"></a>

```csharp
public SccFolderCustomModuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts">SccFolderCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#timeouts SccFolderCustomModule#timeouts}

---

### SccFolderCustomModuleCustomConfig <a name="SccFolderCustomModuleCustomConfig" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModuleCustomConfig {
    SccFolderCustomModuleCustomConfigPredicate Predicate,
    string Recommendation,
    SccFolderCustomModuleCustomConfigResourceSelector ResourceSelector,
    string Severity,
    SccFolderCustomModuleCustomConfigCustomOutput CustomOutput = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate">SccFolderCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.recommendation">Recommendation</a></code> | <code>string</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.resourceSelector">ResourceSelector</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector">SccFolderCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.severity">Severity</a></code> | <code>string</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.customOutput">CustomOutput</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput">SccFolderCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.description">Description</a></code> | <code>string</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.predicate"></a>

```csharp
public SccFolderCustomModuleCustomConfigPredicate Predicate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate">SccFolderCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#predicate SccFolderCustomModule#predicate}

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.recommendation"></a>

```csharp
public string Recommendation { get; set; }
```

- *Type:* string

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#recommendation SccFolderCustomModule#recommendation}

---

##### `ResourceSelector`<sup>Required</sup> <a name="ResourceSelector" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.resourceSelector"></a>

```csharp
public SccFolderCustomModuleCustomConfigResourceSelector ResourceSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector">SccFolderCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#resource_selector SccFolderCustomModule#resource_selector}

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#severity SccFolderCustomModule#severity}

---

##### `CustomOutput`<sup>Optional</sup> <a name="CustomOutput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.customOutput"></a>

```csharp
public SccFolderCustomModuleCustomConfigCustomOutput CustomOutput { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput">SccFolderCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#custom_output SccFolderCustomModule#custom_output}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#description SccFolderCustomModule#description}

---

### SccFolderCustomModuleCustomConfigCustomOutput <a name="SccFolderCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModuleCustomConfigCustomOutput {
    object Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput.property.properties">Properties</a></code> | <code>object</code> | properties block. |

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput.property.properties"></a>

```csharp
public object Properties { get; set; }
```

- *Type:* object

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#properties SccFolderCustomModule#properties}

---

### SccFolderCustomModuleCustomConfigCustomOutputProperties <a name="SccFolderCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModuleCustomConfigCustomOutputProperties {
    string Name = null,
    SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression ValueExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties.property.name">Name</a></code> | <code>string</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">ValueExpression</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#name SccFolderCustomModule#name}

---

##### `ValueExpression`<sup>Optional</sup> <a name="ValueExpression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```csharp
public SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression ValueExpression { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#value_expression SccFolderCustomModule#value_expression}

---

### SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#expression SccFolderCustomModule#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#description SccFolderCustomModule#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#location SccFolderCustomModule#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#title SccFolderCustomModule#title}

---

### SccFolderCustomModuleCustomConfigPredicate <a name="SccFolderCustomModuleCustomConfigPredicate" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModuleCustomConfigPredicate {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#expression SccFolderCustomModule#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#description SccFolderCustomModule#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#location SccFolderCustomModule#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#title SccFolderCustomModule#title}

---

### SccFolderCustomModuleCustomConfigResourceSelector <a name="SccFolderCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModuleCustomConfigResourceSelector {
    string[] ResourceTypes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | The resource types to run the detector on. |

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; set; }
```

- *Type:* string[]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#resource_types SccFolderCustomModule#resource_types}

---

### SccFolderCustomModuleTimeouts <a name="SccFolderCustomModuleTimeouts" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#create SccFolderCustomModule#create}. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#delete SccFolderCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#update SccFolderCustomModule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#create SccFolderCustomModule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#delete SccFolderCustomModule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/scc_folder_custom_module#update SccFolderCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccFolderCustomModuleCustomConfigCustomOutputOutputReference <a name="SccFolderCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModuleCustomConfigCustomOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```csharp
private void PutProperties(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* object

---

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList">SccFolderCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput">SccFolderCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```csharp
public SccFolderCustomModuleCustomConfigCustomOutputPropertiesList Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList">SccFolderCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```csharp
public object PropertiesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```csharp
public SccFolderCustomModuleCustomConfigCustomOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput">SccFolderCustomModuleCustomConfigCustomOutput</a>

---


### SccFolderCustomModuleCustomConfigCustomOutputPropertiesList <a name="SccFolderCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModuleCustomConfigCustomOutputPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```csharp
private SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">PutValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">ResetValueExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueExpression` <a name="PutValueExpression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```csharp
private void PutValueExpression(SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValueExpression` <a name="ResetValueExpression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```csharp
private void ResetValueExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">ValueExpression</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">ValueExpressionInput</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueExpression`<sup>Required</sup> <a name="ValueExpression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```csharp
public SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference ValueExpression { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueExpressionInput`<sup>Optional</sup> <a name="ValueExpressionInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```csharp
public SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression ValueExpressionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```csharp
public SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccFolderCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### SccFolderCustomModuleCustomConfigOutputReference <a name="SccFolderCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModuleCustomConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putCustomOutput">PutCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putPredicate">PutPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putResourceSelector">PutResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.resetCustomOutput">ResetCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomOutput` <a name="PutCustomOutput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```csharp
private void PutCustomOutput(SccFolderCustomModuleCustomConfigCustomOutput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput">SccFolderCustomModuleCustomConfigCustomOutput</a>

---

##### `PutPredicate` <a name="PutPredicate" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putPredicate"></a>

```csharp
private void PutPredicate(SccFolderCustomModuleCustomConfigPredicate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate">SccFolderCustomModuleCustomConfigPredicate</a>

---

##### `PutResourceSelector` <a name="PutResourceSelector" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```csharp
private void PutResourceSelector(SccFolderCustomModuleCustomConfigResourceSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector">SccFolderCustomModuleCustomConfigResourceSelector</a>

---

##### `ResetCustomOutput` <a name="ResetCustomOutput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```csharp
private void ResetCustomOutput()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.customOutput">CustomOutput</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference">SccFolderCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference">SccFolderCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.resourceSelector">ResourceSelector</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference">SccFolderCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.customOutputInput">CustomOutputInput</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput">SccFolderCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.predicateInput">PredicateInput</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate">SccFolderCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.recommendationInput">RecommendationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">ResourceSelectorInput</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector">SccFolderCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.recommendation">Recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig">SccFolderCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomOutput`<sup>Required</sup> <a name="CustomOutput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```csharp
public SccFolderCustomModuleCustomConfigCustomOutputOutputReference CustomOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutputOutputReference">SccFolderCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.predicate"></a>

```csharp
public SccFolderCustomModuleCustomConfigPredicateOutputReference Predicate { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference">SccFolderCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `ResourceSelector`<sup>Required</sup> <a name="ResourceSelector" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```csharp
public SccFolderCustomModuleCustomConfigResourceSelectorOutputReference ResourceSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference">SccFolderCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `CustomOutputInput`<sup>Optional</sup> <a name="CustomOutputInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```csharp
public SccFolderCustomModuleCustomConfigCustomOutput CustomOutputInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigCustomOutput">SccFolderCustomModuleCustomConfigCustomOutput</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `PredicateInput`<sup>Optional</sup> <a name="PredicateInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```csharp
public SccFolderCustomModuleCustomConfigPredicate PredicateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate">SccFolderCustomModuleCustomConfigPredicate</a>

---

##### `RecommendationInput`<sup>Optional</sup> <a name="RecommendationInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```csharp
public string RecommendationInput { get; }
```

- *Type:* string

---

##### `ResourceSelectorInput`<sup>Optional</sup> <a name="ResourceSelectorInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```csharp
public SccFolderCustomModuleCustomConfigResourceSelector ResourceSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector">SccFolderCustomModuleCustomConfigResourceSelector</a>

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```csharp
public string Recommendation { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```csharp
public SccFolderCustomModuleCustomConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfig">SccFolderCustomModuleCustomConfig</a>

---


### SccFolderCustomModuleCustomConfigPredicateOutputReference <a name="SccFolderCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModuleCustomConfigPredicateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate">SccFolderCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```csharp
public SccFolderCustomModuleCustomConfigPredicate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigPredicate">SccFolderCustomModuleCustomConfigPredicate</a>

---


### SccFolderCustomModuleCustomConfigResourceSelectorOutputReference <a name="SccFolderCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModuleCustomConfigResourceSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector">SccFolderCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```csharp
public string[] ResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```csharp
public SccFolderCustomModuleCustomConfigResourceSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleCustomConfigResourceSelector">SccFolderCustomModuleCustomConfigResourceSelector</a>

---


### SccFolderCustomModuleTimeoutsOutputReference <a name="SccFolderCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccFolderCustomModuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccFolderCustomModule.SccFolderCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



