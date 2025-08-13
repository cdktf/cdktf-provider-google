# `modelArmorTemplate` Submodule <a name="`modelArmorTemplate` Submodule" id="@cdktf/provider-google.modelArmorTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ModelArmorTemplate <a name="ModelArmorTemplate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template google_model_armor_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplate(Construct Scope, string Id, ModelArmorTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig">ModelArmorTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig">ModelArmorTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putFilterConfig">PutFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata">PutTemplateMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetTemplateMetadata">ResetTemplateMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilterConfig` <a name="PutFilterConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putFilterConfig"></a>

```csharp
private void PutFilterConfig(ModelArmorTemplateFilterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putFilterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a>

---

##### `PutTemplateMetadata` <a name="PutTemplateMetadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata"></a>

```csharp
private void PutTemplateMetadata(ModelArmorTemplateTemplateMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTemplateMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(ModelArmorTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTemplateMetadata` <a name="ResetTemplateMetadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetTemplateMetadata"></a>

```csharp
private void ResetTemplateMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ModelArmorTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ModelArmorTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ModelArmorTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ModelArmorTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ModelArmorTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ModelArmorTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ModelArmorTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ModelArmorTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ModelArmorTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.filterConfig">FilterConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference">ModelArmorTemplateFilterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateMetadata">TemplateMetadata</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference">ModelArmorTemplateTemplateMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference">ModelArmorTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.filterConfigInput">FilterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateIdInput">TemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateMetadataInput">TemplateMetadataInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateId">TemplateId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FilterConfig`<sup>Required</sup> <a name="FilterConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.filterConfig"></a>

```csharp
public ModelArmorTemplateFilterConfigOutputReference FilterConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference">ModelArmorTemplateFilterConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TemplateMetadata`<sup>Required</sup> <a name="TemplateMetadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateMetadata"></a>

```csharp
public ModelArmorTemplateTemplateMetadataOutputReference TemplateMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference">ModelArmorTemplateTemplateMetadataOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.timeouts"></a>

```csharp
public ModelArmorTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference">ModelArmorTemplateTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `FilterConfigInput`<sup>Optional</sup> <a name="FilterConfigInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.filterConfigInput"></a>

```csharp
public ModelArmorTemplateFilterConfig FilterConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TemplateIdInput`<sup>Optional</sup> <a name="TemplateIdInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateIdInput"></a>

```csharp
public string TemplateIdInput { get; }
```

- *Type:* string

---

##### `TemplateMetadataInput`<sup>Optional</sup> <a name="TemplateMetadataInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateMetadataInput"></a>

```csharp
public ModelArmorTemplateTemplateMetadata TemplateMetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.templateId"></a>

```csharp
public string TemplateId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ModelArmorTemplateConfig <a name="ModelArmorTemplateConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ModelArmorTemplateFilterConfig FilterConfig,
    string Location,
    string TemplateId,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    ModelArmorTemplateTemplateMetadata TemplateMetadata = null,
    ModelArmorTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.filterConfig">FilterConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.templateId">TemplateId</a></code> | <code>string</code> | Id of the requesting object If auto-generating Id server-side, remove this field and template_id from the method_signature of Create RPC. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#id ModelArmorTemplate#id}. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#project ModelArmorTemplate#project}. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.templateMetadata">TemplateMetadata</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a></code> | template_metadata block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FilterConfig`<sup>Required</sup> <a name="FilterConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.filterConfig"></a>

```csharp
public ModelArmorTemplateFilterConfig FilterConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#filter_config ModelArmorTemplate#filter_config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#location ModelArmorTemplate#location}

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.templateId"></a>

```csharp
public string TemplateId { get; set; }
```

- *Type:* string

Id of the requesting object If auto-generating Id server-side, remove this field and template_id from the method_signature of Create RPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#template_id ModelArmorTemplate#template_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#id ModelArmorTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#labels ModelArmorTemplate#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#project ModelArmorTemplate#project}.

---

##### `TemplateMetadata`<sup>Optional</sup> <a name="TemplateMetadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.templateMetadata"></a>

```csharp
public ModelArmorTemplateTemplateMetadata TemplateMetadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a>

template_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#template_metadata ModelArmorTemplate#template_metadata}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateConfig.property.timeouts"></a>

```csharp
public ModelArmorTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts">ModelArmorTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#timeouts ModelArmorTemplate#timeouts}

---

### ModelArmorTemplateFilterConfig <a name="ModelArmorTemplateFilterConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfig {
    ModelArmorTemplateFilterConfigMaliciousUriFilterSettings MaliciousUriFilterSettings = null,
    ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings PiAndJailbreakFilterSettings = null,
    ModelArmorTemplateFilterConfigRaiSettings RaiSettings = null,
    ModelArmorTemplateFilterConfigSdpSettings SdpSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.maliciousUriFilterSettings">MaliciousUriFilterSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a></code> | malicious_uri_filter_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.piAndJailbreakFilterSettings">PiAndJailbreakFilterSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a></code> | pi_and_jailbreak_filter_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.raiSettings">RaiSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a></code> | rai_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.sdpSettings">SdpSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a></code> | sdp_settings block. |

---

##### `MaliciousUriFilterSettings`<sup>Optional</sup> <a name="MaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.maliciousUriFilterSettings"></a>

```csharp
public ModelArmorTemplateFilterConfigMaliciousUriFilterSettings MaliciousUriFilterSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

malicious_uri_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#malicious_uri_filter_settings ModelArmorTemplate#malicious_uri_filter_settings}

---

##### `PiAndJailbreakFilterSettings`<sup>Optional</sup> <a name="PiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.piAndJailbreakFilterSettings"></a>

```csharp
public ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings PiAndJailbreakFilterSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

pi_and_jailbreak_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#pi_and_jailbreak_filter_settings ModelArmorTemplate#pi_and_jailbreak_filter_settings}

---

##### `RaiSettings`<sup>Optional</sup> <a name="RaiSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.raiSettings"></a>

```csharp
public ModelArmorTemplateFilterConfigRaiSettings RaiSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a>

rai_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#rai_settings ModelArmorTemplate#rai_settings}

---

##### `SdpSettings`<sup>Optional</sup> <a name="SdpSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig.property.sdpSettings"></a>

```csharp
public ModelArmorTemplateFilterConfigSdpSettings SdpSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a>

sdp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#sdp_settings ModelArmorTemplate#sdp_settings}

---

### ModelArmorTemplateFilterConfigMaliciousUriFilterSettings <a name="ModelArmorTemplateFilterConfigMaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfigMaliciousUriFilterSettings {
    string FilterEnforcement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `FilterEnforcement`<sup>Optional</sup> <a name="FilterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; set; }
```

- *Type:* string

Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#filter_enforcement ModelArmorTemplate#filter_enforcement}

---

### ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings <a name="ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings {
    string ConfidenceLevel = null,
    string FilterEnforcement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel">ConfidenceLevel</a></code> | <code>string</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `ConfidenceLevel`<sup>Optional</sup> <a name="ConfidenceLevel" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel"></a>

```csharp
public string ConfidenceLevel { get; set; }
```

- *Type:* string

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#confidence_level ModelArmorTemplate#confidence_level}

---

##### `FilterEnforcement`<sup>Optional</sup> <a name="FilterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; set; }
```

- *Type:* string

Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#filter_enforcement ModelArmorTemplate#filter_enforcement}

---

### ModelArmorTemplateFilterConfigRaiSettings <a name="ModelArmorTemplateFilterConfigRaiSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfigRaiSettings {
    object RaiFilters
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings.property.raiFilters">RaiFilters</a></code> | <code>object</code> | rai_filters block. |

---

##### `RaiFilters`<sup>Required</sup> <a name="RaiFilters" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings.property.raiFilters"></a>

```csharp
public object RaiFilters { get; set; }
```

- *Type:* object

rai_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#rai_filters ModelArmorTemplate#rai_filters}

---

### ModelArmorTemplateFilterConfigRaiSettingsRaiFilters <a name="ModelArmorTemplateFilterConfigRaiSettingsRaiFilters" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfigRaiSettingsRaiFilters {
    string FilterType,
    string ConfidenceLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.filterType">FilterType</a></code> | <code>string</code> | Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.confidenceLevel">ConfidenceLevel</a></code> | <code>string</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.filterType"></a>

```csharp
public string FilterType { get; set; }
```

- *Type:* string

Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#filter_type ModelArmorTemplate#filter_type}

---

##### `ConfidenceLevel`<sup>Optional</sup> <a name="ConfidenceLevel" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFilters.property.confidenceLevel"></a>

```csharp
public string ConfidenceLevel { get; set; }
```

- *Type:* string

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#confidence_level ModelArmorTemplate#confidence_level}

---

### ModelArmorTemplateFilterConfigSdpSettings <a name="ModelArmorTemplateFilterConfigSdpSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfigSdpSettings {
    ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig AdvancedConfig = null,
    ModelArmorTemplateFilterConfigSdpSettingsBasicConfig BasicConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings.property.advancedConfig">AdvancedConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a></code> | advanced_config block. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings.property.basicConfig">BasicConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a></code> | basic_config block. |

---

##### `AdvancedConfig`<sup>Optional</sup> <a name="AdvancedConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings.property.advancedConfig"></a>

```csharp
public ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig AdvancedConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

advanced_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#advanced_config ModelArmorTemplate#advanced_config}

---

##### `BasicConfig`<sup>Optional</sup> <a name="BasicConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings.property.basicConfig"></a>

```csharp
public ModelArmorTemplateFilterConfigSdpSettingsBasicConfig BasicConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

basic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#basic_config ModelArmorTemplate#basic_config}

---

### ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig <a name="ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig {
    string DeidentifyTemplate = null,
    string InspectTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>string</code> | Optional Sensitive Data Protection Deidentify template resource name. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate">InspectTemplate</a></code> | <code>string</code> | Sensitive Data Protection inspect template resource name If only inspect template is provided (de-identify template not provided), then Sensitive Data Protection InspectContent action is performed during Sanitization. |

---

##### `DeidentifyTemplate`<sup>Optional</sup> <a name="DeidentifyTemplate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#deidentify_template ModelArmorTemplate#deidentify_template}

---

##### `InspectTemplate`<sup>Optional</sup> <a name="InspectTemplate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate"></a>

```csharp
public string InspectTemplate { get; set; }
```

- *Type:* string

Sensitive Data Protection inspect template resource name If only inspect template is provided (de-identify template not provided), then Sensitive Data Protection InspectContent action is performed during Sanitization.

All Sensitive Data Protection findings identified during
inspection will be returned as SdpFinding in SdpInsepctionResult.
e.g:-
'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#inspect_template ModelArmorTemplate#inspect_template}

---

### ModelArmorTemplateFilterConfigSdpSettingsBasicConfig <a name="ModelArmorTemplateFilterConfigSdpSettingsBasicConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfigSdpSettingsBasicConfig {
    string FilterEnforcement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `FilterEnforcement`<sup>Optional</sup> <a name="FilterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; set; }
```

- *Type:* string

Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#filter_enforcement ModelArmorTemplate#filter_enforcement}

---

### ModelArmorTemplateTemplateMetadata <a name="ModelArmorTemplateTemplateMetadata" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateTemplateMetadata {
    double CustomLlmResponseSafetyErrorCode = null,
    string CustomLlmResponseSafetyErrorMessage = null,
    double CustomPromptSafetyErrorCode = null,
    string CustomPromptSafetyErrorMessage = null,
    string EnforcementType = null,
    object IgnorePartialInvocationFailures = null,
    object LogSanitizeOperations = null,
    object LogTemplateOperations = null,
    ModelArmorTemplateTemplateMetadataMultiLanguageDetection MultiLanguageDetection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorCode">CustomLlmResponseSafetyErrorCode</a></code> | <code>double</code> | Indicates the custom error code set by the user to be returned to the end user if the LLM response trips Model Armor filters. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorMessage">CustomLlmResponseSafetyErrorMessage</a></code> | <code>string</code> | Indicates the custom error message set by the user to be returned to the end user if the LLM response trips Model Armor filters. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorCode">CustomPromptSafetyErrorCode</a></code> | <code>double</code> | Indicates the custom error code set by the user to be returned to the end user by the service extension if the prompt trips Model Armor filters. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorMessage">CustomPromptSafetyErrorMessage</a></code> | <code>string</code> | Indicates the custom error message set by the user to be returned to the end user if the prompt trips Model Armor filters. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.enforcementType">EnforcementType</a></code> | <code>string</code> | Possible values: INSPECT_ONLY INSPECT_AND_BLOCK. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.ignorePartialInvocationFailures">IgnorePartialInvocationFailures</a></code> | <code>object</code> | If true, partial detector failures should be ignored. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.logSanitizeOperations">LogSanitizeOperations</a></code> | <code>object</code> | If true, log sanitize operations. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.logTemplateOperations">LogTemplateOperations</a></code> | <code>object</code> | If true, log template crud operations. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.multiLanguageDetection">MultiLanguageDetection</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a></code> | multi_language_detection block. |

---

##### `CustomLlmResponseSafetyErrorCode`<sup>Optional</sup> <a name="CustomLlmResponseSafetyErrorCode" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorCode"></a>

```csharp
public double CustomLlmResponseSafetyErrorCode { get; set; }
```

- *Type:* double

Indicates the custom error code set by the user to be returned to the end user if the LLM response trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#custom_llm_response_safety_error_code ModelArmorTemplate#custom_llm_response_safety_error_code}

---

##### `CustomLlmResponseSafetyErrorMessage`<sup>Optional</sup> <a name="CustomLlmResponseSafetyErrorMessage" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customLlmResponseSafetyErrorMessage"></a>

```csharp
public string CustomLlmResponseSafetyErrorMessage { get; set; }
```

- *Type:* string

Indicates the custom error message set by the user to be returned to the end user if the LLM response trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#custom_llm_response_safety_error_message ModelArmorTemplate#custom_llm_response_safety_error_message}

---

##### `CustomPromptSafetyErrorCode`<sup>Optional</sup> <a name="CustomPromptSafetyErrorCode" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorCode"></a>

```csharp
public double CustomPromptSafetyErrorCode { get; set; }
```

- *Type:* double

Indicates the custom error code set by the user to be returned to the end user by the service extension if the prompt trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#custom_prompt_safety_error_code ModelArmorTemplate#custom_prompt_safety_error_code}

---

##### `CustomPromptSafetyErrorMessage`<sup>Optional</sup> <a name="CustomPromptSafetyErrorMessage" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.customPromptSafetyErrorMessage"></a>

```csharp
public string CustomPromptSafetyErrorMessage { get; set; }
```

- *Type:* string

Indicates the custom error message set by the user to be returned to the end user if the prompt trips Model Armor filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#custom_prompt_safety_error_message ModelArmorTemplate#custom_prompt_safety_error_message}

---

##### `EnforcementType`<sup>Optional</sup> <a name="EnforcementType" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.enforcementType"></a>

```csharp
public string EnforcementType { get; set; }
```

- *Type:* string

Possible values: INSPECT_ONLY INSPECT_AND_BLOCK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#enforcement_type ModelArmorTemplate#enforcement_type}

---

##### `IgnorePartialInvocationFailures`<sup>Optional</sup> <a name="IgnorePartialInvocationFailures" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.ignorePartialInvocationFailures"></a>

```csharp
public object IgnorePartialInvocationFailures { get; set; }
```

- *Type:* object

If true, partial detector failures should be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#ignore_partial_invocation_failures ModelArmorTemplate#ignore_partial_invocation_failures}

---

##### `LogSanitizeOperations`<sup>Optional</sup> <a name="LogSanitizeOperations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.logSanitizeOperations"></a>

```csharp
public object LogSanitizeOperations { get; set; }
```

- *Type:* object

If true, log sanitize operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#log_sanitize_operations ModelArmorTemplate#log_sanitize_operations}

---

##### `LogTemplateOperations`<sup>Optional</sup> <a name="LogTemplateOperations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.logTemplateOperations"></a>

```csharp
public object LogTemplateOperations { get; set; }
```

- *Type:* object

If true, log template crud operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#log_template_operations ModelArmorTemplate#log_template_operations}

---

##### `MultiLanguageDetection`<sup>Optional</sup> <a name="MultiLanguageDetection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata.property.multiLanguageDetection"></a>

```csharp
public ModelArmorTemplateTemplateMetadataMultiLanguageDetection MultiLanguageDetection { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

multi_language_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#multi_language_detection ModelArmorTemplate#multi_language_detection}

---

### ModelArmorTemplateTemplateMetadataMultiLanguageDetection <a name="ModelArmorTemplateTemplateMetadataMultiLanguageDetection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateTemplateMetadataMultiLanguageDetection {
    object EnableMultiLanguageDetection
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection.property.enableMultiLanguageDetection">EnableMultiLanguageDetection</a></code> | <code>object</code> | If true, multi language detection will be enabled. |

---

##### `EnableMultiLanguageDetection`<sup>Required</sup> <a name="EnableMultiLanguageDetection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection.property.enableMultiLanguageDetection"></a>

```csharp
public object EnableMultiLanguageDetection { get; set; }
```

- *Type:* object

If true, multi language detection will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#enable_multi_language_detection ModelArmorTemplate#enable_multi_language_detection}

---

### ModelArmorTemplateTimeouts <a name="ModelArmorTemplateTimeouts" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#create ModelArmorTemplate#create}. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#delete ModelArmorTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#update ModelArmorTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#create ModelArmorTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#delete ModelArmorTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/model_armor_template#update ModelArmorTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference <a name="ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement">ResetFilterEnforcement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterEnforcement` <a name="ResetFilterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement"></a>

```csharp
private void ResetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput">FilterEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterEnforcementInput`<sup>Optional</sup> <a name="FilterEnforcementInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```csharp
public string FilterEnforcementInput { get; }
```

- *Type:* string

---

##### `FilterEnforcement`<sup>Required</sup> <a name="FilterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue"></a>

```csharp
public ModelArmorTemplateFilterConfigMaliciousUriFilterSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

---


### ModelArmorTemplateFilterConfigOutputReference <a name="ModelArmorTemplateFilterConfigOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putMaliciousUriFilterSettings">PutMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings">PutPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putRaiSettings">PutRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putSdpSettings">PutSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetMaliciousUriFilterSettings">ResetMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetPiAndJailbreakFilterSettings">ResetPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetRaiSettings">ResetRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetSdpSettings">ResetSdpSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaliciousUriFilterSettings` <a name="PutMaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putMaliciousUriFilterSettings"></a>

```csharp
private void PutMaliciousUriFilterSettings(ModelArmorTemplateFilterConfigMaliciousUriFilterSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putMaliciousUriFilterSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

---

##### `PutPiAndJailbreakFilterSettings` <a name="PutPiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings"></a>

```csharp
private void PutPiAndJailbreakFilterSettings(ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putPiAndJailbreakFilterSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `PutRaiSettings` <a name="PutRaiSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putRaiSettings"></a>

```csharp
private void PutRaiSettings(ModelArmorTemplateFilterConfigRaiSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putRaiSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a>

---

##### `PutSdpSettings` <a name="PutSdpSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putSdpSettings"></a>

```csharp
private void PutSdpSettings(ModelArmorTemplateFilterConfigSdpSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.putSdpSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a>

---

##### `ResetMaliciousUriFilterSettings` <a name="ResetMaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetMaliciousUriFilterSettings"></a>

```csharp
private void ResetMaliciousUriFilterSettings()
```

##### `ResetPiAndJailbreakFilterSettings` <a name="ResetPiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetPiAndJailbreakFilterSettings"></a>

```csharp
private void ResetPiAndJailbreakFilterSettings()
```

##### `ResetRaiSettings` <a name="ResetRaiSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetRaiSettings"></a>

```csharp
private void ResetRaiSettings()
```

##### `ResetSdpSettings` <a name="ResetSdpSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.resetSdpSettings"></a>

```csharp
private void ResetSdpSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettings">MaliciousUriFilterSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference">ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettings">PiAndJailbreakFilterSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.raiSettings">RaiSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference">ModelArmorTemplateFilterConfigRaiSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.sdpSettings">SdpSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference">ModelArmorTemplateFilterConfigSdpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettingsInput">MaliciousUriFilterSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput">PiAndJailbreakFilterSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.raiSettingsInput">RaiSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.sdpSettingsInput">SdpSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaliciousUriFilterSettings`<sup>Required</sup> <a name="MaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettings"></a>

```csharp
public ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference MaliciousUriFilterSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference">ModelArmorTemplateFilterConfigMaliciousUriFilterSettingsOutputReference</a>

---

##### `PiAndJailbreakFilterSettings`<sup>Required</sup> <a name="PiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettings"></a>

```csharp
public ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference PiAndJailbreakFilterSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference</a>

---

##### `RaiSettings`<sup>Required</sup> <a name="RaiSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.raiSettings"></a>

```csharp
public ModelArmorTemplateFilterConfigRaiSettingsOutputReference RaiSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference">ModelArmorTemplateFilterConfigRaiSettingsOutputReference</a>

---

##### `SdpSettings`<sup>Required</sup> <a name="SdpSettings" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.sdpSettings"></a>

```csharp
public ModelArmorTemplateFilterConfigSdpSettingsOutputReference SdpSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference">ModelArmorTemplateFilterConfigSdpSettingsOutputReference</a>

---

##### `MaliciousUriFilterSettingsInput`<sup>Optional</sup> <a name="MaliciousUriFilterSettingsInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.maliciousUriFilterSettingsInput"></a>

```csharp
public ModelArmorTemplateFilterConfigMaliciousUriFilterSettings MaliciousUriFilterSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigMaliciousUriFilterSettings">ModelArmorTemplateFilterConfigMaliciousUriFilterSettings</a>

---

##### `PiAndJailbreakFilterSettingsInput`<sup>Optional</sup> <a name="PiAndJailbreakFilterSettingsInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput"></a>

```csharp
public ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings PiAndJailbreakFilterSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `RaiSettingsInput`<sup>Optional</sup> <a name="RaiSettingsInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.raiSettingsInput"></a>

```csharp
public ModelArmorTemplateFilterConfigRaiSettings RaiSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a>

---

##### `SdpSettingsInput`<sup>Optional</sup> <a name="SdpSettingsInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.sdpSettingsInput"></a>

```csharp
public ModelArmorTemplateFilterConfigSdpSettings SdpSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigOutputReference.property.internalValue"></a>

```csharp
public ModelArmorTemplateFilterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfig">ModelArmorTemplateFilterConfig</a>

---


### ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference <a name="ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel">ResetConfidenceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement">ResetFilterEnforcement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidenceLevel` <a name="ResetConfidenceLevel" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel"></a>

```csharp
private void ResetConfidenceLevel()
```

##### `ResetFilterEnforcement` <a name="ResetFilterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement"></a>

```csharp
private void ResetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput">ConfidenceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput">FilterEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel">ConfidenceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfidenceLevelInput`<sup>Optional</sup> <a name="ConfidenceLevelInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput"></a>

```csharp
public string ConfidenceLevelInput { get; }
```

- *Type:* string

---

##### `FilterEnforcementInput`<sup>Optional</sup> <a name="FilterEnforcementInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```csharp
public string FilterEnforcementInput { get; }
```

- *Type:* string

---

##### `ConfidenceLevel`<sup>Required</sup> <a name="ConfidenceLevel" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel"></a>

```csharp
public string ConfidenceLevel { get; }
```

- *Type:* string

---

##### `FilterEnforcement`<sup>Required</sup> <a name="FilterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue"></a>

```csharp
public ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings">ModelArmorTemplateFilterConfigPiAndJailbreakFilterSettings</a>

---


### ModelArmorTemplateFilterConfigRaiSettingsOutputReference <a name="ModelArmorTemplateFilterConfigRaiSettingsOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfigRaiSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.putRaiFilters">PutRaiFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRaiFilters` <a name="PutRaiFilters" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.putRaiFilters"></a>

```csharp
private void PutRaiFilters(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.putRaiFilters.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFilters">RaiFilters</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList">ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFiltersInput">RaiFiltersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RaiFilters`<sup>Required</sup> <a name="RaiFilters" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFilters"></a>

```csharp
public ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList RaiFilters { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList">ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList</a>

---

##### `RaiFiltersInput`<sup>Optional</sup> <a name="RaiFiltersInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.raiFiltersInput"></a>

```csharp
public object RaiFiltersInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsOutputReference.property.internalValue"></a>

```csharp
public ModelArmorTemplateFilterConfigRaiSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettings">ModelArmorTemplateFilterConfigRaiSettings</a>

---


### ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList <a name="ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.get"></a>

```csharp
private ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference <a name="ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel">ResetConfidenceLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidenceLevel` <a name="ResetConfidenceLevel" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel"></a>

```csharp
private void ResetConfidenceLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput">ConfidenceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel">ConfidenceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType">FilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfidenceLevelInput`<sup>Optional</sup> <a name="ConfidenceLevelInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput"></a>

```csharp
public string ConfidenceLevelInput { get; }
```

- *Type:* string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput"></a>

```csharp
public string FilterTypeInput { get; }
```

- *Type:* string

---

##### `ConfidenceLevel`<sup>Required</sup> <a name="ConfidenceLevel" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel"></a>

```csharp
public string ConfidenceLevel { get; }
```

- *Type:* string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType"></a>

```csharp
public string FilterType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference <a name="ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate">ResetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate">ResetInspectTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeidentifyTemplate` <a name="ResetDeidentifyTemplate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate"></a>

```csharp
private void ResetDeidentifyTemplate()
```

##### `ResetInspectTemplate` <a name="ResetInspectTemplate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate"></a>

```csharp
private void ResetInspectTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput">DeidentifyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput">InspectTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate">InspectTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeidentifyTemplateInput`<sup>Optional</sup> <a name="DeidentifyTemplateInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput"></a>

```csharp
public string DeidentifyTemplateInput { get; }
```

- *Type:* string

---

##### `InspectTemplateInput`<sup>Optional</sup> <a name="InspectTemplateInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput"></a>

```csharp
public string InspectTemplateInput { get; }
```

- *Type:* string

---

##### `DeidentifyTemplate`<sup>Required</sup> <a name="DeidentifyTemplate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate"></a>

```csharp
public string DeidentifyTemplate { get; }
```

- *Type:* string

---

##### `InspectTemplate`<sup>Required</sup> <a name="InspectTemplate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate"></a>

```csharp
public string InspectTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue"></a>

```csharp
public ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

---


### ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference <a name="ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement">ResetFilterEnforcement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterEnforcement` <a name="ResetFilterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement"></a>

```csharp
private void ResetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput">FilterEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterEnforcementInput`<sup>Optional</sup> <a name="FilterEnforcementInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput"></a>

```csharp
public string FilterEnforcementInput { get; }
```

- *Type:* string

---

##### `FilterEnforcement`<sup>Required</sup> <a name="FilterEnforcement" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue"></a>

```csharp
public ModelArmorTemplateFilterConfigSdpSettingsBasicConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

---


### ModelArmorTemplateFilterConfigSdpSettingsOutputReference <a name="ModelArmorTemplateFilterConfigSdpSettingsOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateFilterConfigSdpSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig">PutAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putBasicConfig">PutBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetAdvancedConfig">ResetAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetBasicConfig">ResetBasicConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedConfig` <a name="PutAdvancedConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig"></a>

```csharp
private void PutAdvancedConfig(ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putAdvancedConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `PutBasicConfig` <a name="PutBasicConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putBasicConfig"></a>

```csharp
private void PutBasicConfig(ModelArmorTemplateFilterConfigSdpSettingsBasicConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.putBasicConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

---

##### `ResetAdvancedConfig` <a name="ResetAdvancedConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetAdvancedConfig"></a>

```csharp
private void ResetAdvancedConfig()
```

##### `ResetBasicConfig` <a name="ResetBasicConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.resetBasicConfig"></a>

```csharp
private void ResetBasicConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfig">AdvancedConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfig">BasicConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference">ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfigInput">AdvancedConfigInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfigInput">BasicConfigInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvancedConfig`<sup>Required</sup> <a name="AdvancedConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfig"></a>

```csharp
public ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference AdvancedConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfigOutputReference</a>

---

##### `BasicConfig`<sup>Required</sup> <a name="BasicConfig" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfig"></a>

```csharp
public ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference BasicConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference">ModelArmorTemplateFilterConfigSdpSettingsBasicConfigOutputReference</a>

---

##### `AdvancedConfigInput`<sup>Optional</sup> <a name="AdvancedConfigInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.advancedConfigInput"></a>

```csharp
public ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig AdvancedConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig">ModelArmorTemplateFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `BasicConfigInput`<sup>Optional</sup> <a name="BasicConfigInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.basicConfigInput"></a>

```csharp
public ModelArmorTemplateFilterConfigSdpSettingsBasicConfig BasicConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsBasicConfig">ModelArmorTemplateFilterConfigSdpSettingsBasicConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettingsOutputReference.property.internalValue"></a>

```csharp
public ModelArmorTemplateFilterConfigSdpSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateFilterConfigSdpSettings">ModelArmorTemplateFilterConfigSdpSettings</a>

---


### ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference <a name="ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput">EnableMultiLanguageDetectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection">EnableMultiLanguageDetection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableMultiLanguageDetectionInput`<sup>Optional</sup> <a name="EnableMultiLanguageDetectionInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput"></a>

```csharp
public object EnableMultiLanguageDetectionInput { get; }
```

- *Type:* object

---

##### `EnableMultiLanguageDetection`<sup>Required</sup> <a name="EnableMultiLanguageDetection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection"></a>

```csharp
public object EnableMultiLanguageDetection { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference.property.internalValue"></a>

```csharp
public ModelArmorTemplateTemplateMetadataMultiLanguageDetection InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

---


### ModelArmorTemplateTemplateMetadataOutputReference <a name="ModelArmorTemplateTemplateMetadataOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateTemplateMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.putMultiLanguageDetection">PutMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorCode">ResetCustomLlmResponseSafetyErrorCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorMessage">ResetCustomLlmResponseSafetyErrorMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorCode">ResetCustomPromptSafetyErrorCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorMessage">ResetCustomPromptSafetyErrorMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetEnforcementType">ResetEnforcementType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetIgnorePartialInvocationFailures">ResetIgnorePartialInvocationFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetLogSanitizeOperations">ResetLogSanitizeOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetLogTemplateOperations">ResetLogTemplateOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetMultiLanguageDetection">ResetMultiLanguageDetection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMultiLanguageDetection` <a name="PutMultiLanguageDetection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.putMultiLanguageDetection"></a>

```csharp
private void PutMultiLanguageDetection(ModelArmorTemplateTemplateMetadataMultiLanguageDetection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.putMultiLanguageDetection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

---

##### `ResetCustomLlmResponseSafetyErrorCode` <a name="ResetCustomLlmResponseSafetyErrorCode" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorCode"></a>

```csharp
private void ResetCustomLlmResponseSafetyErrorCode()
```

##### `ResetCustomLlmResponseSafetyErrorMessage` <a name="ResetCustomLlmResponseSafetyErrorMessage" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomLlmResponseSafetyErrorMessage"></a>

```csharp
private void ResetCustomLlmResponseSafetyErrorMessage()
```

##### `ResetCustomPromptSafetyErrorCode` <a name="ResetCustomPromptSafetyErrorCode" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorCode"></a>

```csharp
private void ResetCustomPromptSafetyErrorCode()
```

##### `ResetCustomPromptSafetyErrorMessage` <a name="ResetCustomPromptSafetyErrorMessage" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetCustomPromptSafetyErrorMessage"></a>

```csharp
private void ResetCustomPromptSafetyErrorMessage()
```

##### `ResetEnforcementType` <a name="ResetEnforcementType" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetEnforcementType"></a>

```csharp
private void ResetEnforcementType()
```

##### `ResetIgnorePartialInvocationFailures` <a name="ResetIgnorePartialInvocationFailures" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetIgnorePartialInvocationFailures"></a>

```csharp
private void ResetIgnorePartialInvocationFailures()
```

##### `ResetLogSanitizeOperations` <a name="ResetLogSanitizeOperations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetLogSanitizeOperations"></a>

```csharp
private void ResetLogSanitizeOperations()
```

##### `ResetLogTemplateOperations` <a name="ResetLogTemplateOperations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetLogTemplateOperations"></a>

```csharp
private void ResetLogTemplateOperations()
```

##### `ResetMultiLanguageDetection` <a name="ResetMultiLanguageDetection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.resetMultiLanguageDetection"></a>

```csharp
private void ResetMultiLanguageDetection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetection">MultiLanguageDetection</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference">ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCodeInput">CustomLlmResponseSafetyErrorCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessageInput">CustomLlmResponseSafetyErrorMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCodeInput">CustomPromptSafetyErrorCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessageInput">CustomPromptSafetyErrorMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.enforcementTypeInput">EnforcementTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailuresInput">IgnorePartialInvocationFailuresInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperationsInput">LogSanitizeOperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperationsInput">LogTemplateOperationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetectionInput">MultiLanguageDetectionInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCode">CustomLlmResponseSafetyErrorCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessage">CustomLlmResponseSafetyErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCode">CustomPromptSafetyErrorCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessage">CustomPromptSafetyErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.enforcementType">EnforcementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailures">IgnorePartialInvocationFailures</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperations">LogSanitizeOperations</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperations">LogTemplateOperations</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MultiLanguageDetection`<sup>Required</sup> <a name="MultiLanguageDetection" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetection"></a>

```csharp
public ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference MultiLanguageDetection { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference">ModelArmorTemplateTemplateMetadataMultiLanguageDetectionOutputReference</a>

---

##### `CustomLlmResponseSafetyErrorCodeInput`<sup>Optional</sup> <a name="CustomLlmResponseSafetyErrorCodeInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCodeInput"></a>

```csharp
public double CustomLlmResponseSafetyErrorCodeInput { get; }
```

- *Type:* double

---

##### `CustomLlmResponseSafetyErrorMessageInput`<sup>Optional</sup> <a name="CustomLlmResponseSafetyErrorMessageInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessageInput"></a>

```csharp
public string CustomLlmResponseSafetyErrorMessageInput { get; }
```

- *Type:* string

---

##### `CustomPromptSafetyErrorCodeInput`<sup>Optional</sup> <a name="CustomPromptSafetyErrorCodeInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCodeInput"></a>

```csharp
public double CustomPromptSafetyErrorCodeInput { get; }
```

- *Type:* double

---

##### `CustomPromptSafetyErrorMessageInput`<sup>Optional</sup> <a name="CustomPromptSafetyErrorMessageInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessageInput"></a>

```csharp
public string CustomPromptSafetyErrorMessageInput { get; }
```

- *Type:* string

---

##### `EnforcementTypeInput`<sup>Optional</sup> <a name="EnforcementTypeInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.enforcementTypeInput"></a>

```csharp
public string EnforcementTypeInput { get; }
```

- *Type:* string

---

##### `IgnorePartialInvocationFailuresInput`<sup>Optional</sup> <a name="IgnorePartialInvocationFailuresInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailuresInput"></a>

```csharp
public object IgnorePartialInvocationFailuresInput { get; }
```

- *Type:* object

---

##### `LogSanitizeOperationsInput`<sup>Optional</sup> <a name="LogSanitizeOperationsInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperationsInput"></a>

```csharp
public object LogSanitizeOperationsInput { get; }
```

- *Type:* object

---

##### `LogTemplateOperationsInput`<sup>Optional</sup> <a name="LogTemplateOperationsInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperationsInput"></a>

```csharp
public object LogTemplateOperationsInput { get; }
```

- *Type:* object

---

##### `MultiLanguageDetectionInput`<sup>Optional</sup> <a name="MultiLanguageDetectionInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.multiLanguageDetectionInput"></a>

```csharp
public ModelArmorTemplateTemplateMetadataMultiLanguageDetection MultiLanguageDetectionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataMultiLanguageDetection">ModelArmorTemplateTemplateMetadataMultiLanguageDetection</a>

---

##### `CustomLlmResponseSafetyErrorCode`<sup>Required</sup> <a name="CustomLlmResponseSafetyErrorCode" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorCode"></a>

```csharp
public double CustomLlmResponseSafetyErrorCode { get; }
```

- *Type:* double

---

##### `CustomLlmResponseSafetyErrorMessage`<sup>Required</sup> <a name="CustomLlmResponseSafetyErrorMessage" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customLlmResponseSafetyErrorMessage"></a>

```csharp
public string CustomLlmResponseSafetyErrorMessage { get; }
```

- *Type:* string

---

##### `CustomPromptSafetyErrorCode`<sup>Required</sup> <a name="CustomPromptSafetyErrorCode" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorCode"></a>

```csharp
public double CustomPromptSafetyErrorCode { get; }
```

- *Type:* double

---

##### `CustomPromptSafetyErrorMessage`<sup>Required</sup> <a name="CustomPromptSafetyErrorMessage" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.customPromptSafetyErrorMessage"></a>

```csharp
public string CustomPromptSafetyErrorMessage { get; }
```

- *Type:* string

---

##### `EnforcementType`<sup>Required</sup> <a name="EnforcementType" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.enforcementType"></a>

```csharp
public string EnforcementType { get; }
```

- *Type:* string

---

##### `IgnorePartialInvocationFailures`<sup>Required</sup> <a name="IgnorePartialInvocationFailures" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.ignorePartialInvocationFailures"></a>

```csharp
public object IgnorePartialInvocationFailures { get; }
```

- *Type:* object

---

##### `LogSanitizeOperations`<sup>Required</sup> <a name="LogSanitizeOperations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logSanitizeOperations"></a>

```csharp
public object LogSanitizeOperations { get; }
```

- *Type:* object

---

##### `LogTemplateOperations`<sup>Required</sup> <a name="LogTemplateOperations" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.logTemplateOperations"></a>

```csharp
public object LogTemplateOperations { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadataOutputReference.property.internalValue"></a>

```csharp
public ModelArmorTemplateTemplateMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTemplateMetadata">ModelArmorTemplateTemplateMetadata</a>

---


### ModelArmorTemplateTimeoutsOutputReference <a name="ModelArmorTemplateTimeoutsOutputReference" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ModelArmorTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.modelArmorTemplate.ModelArmorTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



