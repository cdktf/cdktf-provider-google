# `google_ml_engine_model`

Refer to the Terraform Registory for docs: [`google_ml_engine_model`](https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model).

# `mlEngineModel` Submodule <a name="`mlEngineModel` Submodule" id="@cdktf/provider-google.mlEngineModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MlEngineModel <a name="MlEngineModel" id="@cdktf/provider-google.mlEngineModel.MlEngineModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model google_ml_engine_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MlEngineModel(Construct Scope, string Id, MlEngineModelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig">MlEngineModelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig">MlEngineModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.putDefaultVersion">PutDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetDefaultVersion">ResetDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOnlinePredictionConsoleLogging">ResetOnlinePredictionConsoleLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOnlinePredictionLogging">ResetOnlinePredictionLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutDefaultVersion` <a name="PutDefaultVersion" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putDefaultVersion"></a>

```csharp
private void PutDefaultVersion(MlEngineModelDefaultVersion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putDefaultVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putTimeouts"></a>

```csharp
private void PutTimeouts(MlEngineModelTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a>

---

##### `ResetDefaultVersion` <a name="ResetDefaultVersion" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetDefaultVersion"></a>

```csharp
private void ResetDefaultVersion()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetOnlinePredictionConsoleLogging` <a name="ResetOnlinePredictionConsoleLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOnlinePredictionConsoleLogging"></a>

```csharp
private void ResetOnlinePredictionConsoleLogging()
```

##### `ResetOnlinePredictionLogging` <a name="ResetOnlinePredictionLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOnlinePredictionLogging"></a>

```csharp
private void ResetOnlinePredictionLogging()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetRegions"></a>

```csharp
private void ResetRegions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MlEngineModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MlEngineModel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MlEngineModel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MlEngineModel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MlEngineModel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MlEngineModel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MlEngineModel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MlEngineModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MlEngineModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.defaultVersion">DefaultVersion</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference">MlEngineModelDefaultVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference">MlEngineModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.defaultVersionInput">DefaultVersionInput</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionConsoleLoggingInput">OnlinePredictionConsoleLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionLoggingInput">OnlinePredictionLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionConsoleLogging">OnlinePredictionConsoleLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionLogging">OnlinePredictionLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.defaultVersion"></a>

```csharp
public MlEngineModelDefaultVersionOutputReference DefaultVersion { get; }
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference">MlEngineModelDefaultVersionOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.timeouts"></a>

```csharp
public MlEngineModelTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference">MlEngineModelTimeoutsOutputReference</a>

---

##### `DefaultVersionInput`<sup>Optional</sup> <a name="DefaultVersionInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.defaultVersionInput"></a>

```csharp
public MlEngineModelDefaultVersion DefaultVersionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OnlinePredictionConsoleLoggingInput`<sup>Optional</sup> <a name="OnlinePredictionConsoleLoggingInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionConsoleLoggingInput"></a>

```csharp
public object OnlinePredictionConsoleLoggingInput { get; }
```

- *Type:* object

---

##### `OnlinePredictionLoggingInput`<sup>Optional</sup> <a name="OnlinePredictionLoggingInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionLoggingInput"></a>

```csharp
public object OnlinePredictionLoggingInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OnlinePredictionConsoleLogging`<sup>Required</sup> <a name="OnlinePredictionConsoleLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionConsoleLogging"></a>

```csharp
public object OnlinePredictionConsoleLogging { get; }
```

- *Type:* object

---

##### `OnlinePredictionLogging`<sup>Required</sup> <a name="OnlinePredictionLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionLogging"></a>

```csharp
public object OnlinePredictionLogging { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MlEngineModelConfig <a name="MlEngineModelConfig" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MlEngineModelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    MlEngineModelDefaultVersion DefaultVersion = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    object OnlinePredictionConsoleLogging = null,
    object OnlinePredictionLogging = null,
    string Project = null,
    string[] Regions = null,
    MlEngineModelTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.name">Name</a></code> | <code>string</code> | The name specified for the model. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.defaultVersion">DefaultVersion</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a></code> | default_version block. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.description">Description</a></code> | <code>string</code> | The description specified for the model when it was created. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#id MlEngineModel#id}. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | One or more labels that you can add, to organize your models. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.onlinePredictionConsoleLogging">OnlinePredictionConsoleLogging</a></code> | <code>object</code> | If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.onlinePredictionLogging">OnlinePredictionLogging</a></code> | <code>object</code> | If true, online prediction access logs are sent to StackDriver Logging. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#project MlEngineModel#project}. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.regions">Regions</a></code> | <code>string[]</code> | The list of regions where the model is going to be deployed. Currently only one region per model is supported. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name specified for the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#name MlEngineModel#name}

---

##### `DefaultVersion`<sup>Optional</sup> <a name="DefaultVersion" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.defaultVersion"></a>

```csharp
public MlEngineModelDefaultVersion DefaultVersion { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a>

default_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#default_version MlEngineModel#default_version}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description specified for the model when it was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#description MlEngineModel#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#id MlEngineModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

One or more labels that you can add, to organize your models.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#labels MlEngineModel#labels}

---

##### `OnlinePredictionConsoleLogging`<sup>Optional</sup> <a name="OnlinePredictionConsoleLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.onlinePredictionConsoleLogging"></a>

```csharp
public object OnlinePredictionConsoleLogging { get; set; }
```

- *Type:* object

If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#online_prediction_console_logging MlEngineModel#online_prediction_console_logging}

---

##### `OnlinePredictionLogging`<sup>Optional</sup> <a name="OnlinePredictionLogging" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.onlinePredictionLogging"></a>

```csharp
public object OnlinePredictionLogging { get; set; }
```

- *Type:* object

If true, online prediction access logs are sent to StackDriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#online_prediction_logging MlEngineModel#online_prediction_logging}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#project MlEngineModel#project}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

The list of regions where the model is going to be deployed. Currently only one region per model is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#regions MlEngineModel#regions}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.timeouts"></a>

```csharp
public MlEngineModelTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#timeouts MlEngineModel#timeouts}

---

### MlEngineModelDefaultVersion <a name="MlEngineModelDefaultVersion" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MlEngineModelDefaultVersion {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion.property.name">Name</a></code> | <code>string</code> | The name specified for the version when it was created. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name specified for the version when it was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#name MlEngineModel#name}

---

### MlEngineModelTimeouts <a name="MlEngineModelTimeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MlEngineModelTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#create MlEngineModel#create}. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#delete MlEngineModel#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#create MlEngineModel#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/ml_engine_model#delete MlEngineModel#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MlEngineModelDefaultVersionOutputReference <a name="MlEngineModelDefaultVersionOutputReference" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MlEngineModelDefaultVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.internalValue"></a>

```csharp
public MlEngineModelDefaultVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a>

---


### MlEngineModelTimeoutsOutputReference <a name="MlEngineModelTimeoutsOutputReference" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MlEngineModelTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



